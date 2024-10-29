import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { OAuthService } from '../../services/quickbooks/oauth.service';

const getPem = require('rsa-pem-from-mod-exp');

@Injectable()
export class LocalJwtService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly oAuthService: OAuthService,
  ) {}

  async validate(idToken: string): Promise<any> {
    const openIdConfiguration = this.oAuthService.openIdConfiguration;
    const intuitConfig = this.oAuthService.intuitConfig;
    const tokenParts = idToken.split('.');
    const idTokenHeader = JSON.parse(atob(tokenParts[0]));
    const idTokenPayload = JSON.parse(atob(tokenParts[1]));
    if(
      idTokenPayload.iss !== openIdConfiguration.issuer ||
      !idTokenPayload.aud.includes(intuitConfig.clientId) ||
      idTokenPayload.exp <= Date.now() / 1000
    ) {
      throw new UnauthorizedException('Invalid iss, aud or exp found on token');
    }
    const key = await this.getKeyFromJWKsURI(idTokenHeader.kid);
    const publicKey = getPem(key.n, key.e);
    console.log(idTokenHeader);
    console.log(idTokenPayload);
    return this.jwtService.verifyAsync(idToken, { secret: publicKey });
  }

  async getKeyFromJWKsURI(kid: string) {
    const openIdConfiguration = this.oAuthService.openIdConfiguration;
    try {
      const res = await fetch(openIdConfiguration.jwks_uri);
      const { keys } = await res.json();
      return keys.find(key => key.kid === kid);
    } catch (e) {
      console.log(e);
    }
    throw new UnauthorizedException();
  }
}