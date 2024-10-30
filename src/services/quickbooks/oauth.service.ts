import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as Tokens from 'csrf';
import * as ClientOAuth2 from 'client-oauth2';
import { Request } from 'express';

import oAuthConfig from '../../config/quickbooks-oauth.config';
import openIdConfig from '../../config/openid.config';
import { Token } from 'client-oauth2';
import { makeAuthorizationHeader } from '../../shared/utils';

@Injectable()
export class OAuthService {
  intuitConfig = {
    clientId: oAuthConfig.clientId,
    clientSecret: oAuthConfig.clientSecret,
    redirectUri: oAuthConfig.redirectUri,
    scopes: [],
    authorizationUri: '',
    accessTokenUri: '',
  };
  basicAuth = btoa(`${oAuthConfig.clientId}:${oAuthConfig.clientSecret}`);
  openIdConfiguration = openIdConfig;
  intuitAuth: ClientOAuth2 = null;
  openidUri = '';
  revokeUri = '';
  csrf = new Tokens();

  constructor() {
    this.refreshEndpoints();
  }

  async refreshEndpoints() {
    try {
      const res = await fetch(oAuthConfig.configurationEndpoint);
      const json = await res.json();
      this.openIdConfiguration = json;
      this.openidUri = json.userinfo_endpoint;
      this.revokeUri = json.revocation_endpoint;

      this.intuitConfig.authorizationUri = json.authorization_endpoint;
      this.intuitConfig.accessTokenUri = json.token_endpoint;
      this.intuitAuth = new ClientOAuth2(this.intuitConfig)

      console.log('Initialized the refresh endpoints');
    } catch (e) {
      console.log(e);
    }
  }

  async refreshTokens(session: any) {
    try {
      const token = this.getToken(session);
      const newToken = await token.refresh();
      this.saveTokenToSession(session, newToken);
      return newToken;
    } catch (e) {
      console.log(e);
      throw new UnauthorizedException();
    }
  }

  getExchangeAccessToken(url: string): Promise<Token> {
    return this.intuitAuth.code.getToken(url);
  }

  async setScopes(flowName: string) {
    if (!this.intuitConfig.authorizationUri) {
      await this.refreshEndpoints();
    }
    this.intuitConfig.scopes = oAuthConfig.scopes[flowName];
    this.intuitAuth = new ClientOAuth2(this.intuitConfig);
  }

  generateAntiForgery(session) {
    session.secret = this.csrf.secretSync();
    return this.csrf.create(session.secret);
  }

  getToken(session: any) {
    if(!session.accessToken) return null;

    return this.intuitAuth.createToken(
      session.accessToken, session.refreshToken,
      session.tokenType, session.data
    )
  }

  saveTokenToSession(session: any, token: any) {
    session.accessToken = token.accessToken;
    session.refreshToken = token.refreshToken;
    session.tokenType = token.tokenType;
    session.data = token.data;
  }

  verifyAntiForgery(session: any, token: string): boolean {
    return this.csrf.verify(session.secret, token);
  }

  async getUserInfo(req: Request): Promise<any> {
    const headers = makeAuthorizationHeader(req);
    const url = `${process.env.QUICKBOOKS_ACCOUNTS_API_URI}/v1/openid_connect/userinfo`;
    try {
      const res = await fetch(url, { headers });
      return res.json();
    } catch (e) {
      throw e;
    }
  }
}
