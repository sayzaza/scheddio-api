import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: '.env' });

const config = {
  issuer: 'https://oauth.platform.intuit.com/op/v1',
  authorization_endpoint: 'https://appcenter.intuit.com/connect/oauth2',
  token_endpoint: 'https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer',
  userinfo_endpoint: process.env.QUICKBOOKS_USERINFO_ENDPOINT,
  revocation_endpoint:
    'https://developer.api.intuit.com/v2/oauth2/tokens/revoke',
  jwks_uri: 'https://oauth.platform.intuit.com/op/v1/jwks',
  response_types_supported: ['code'],
  subject_types_supported: ['public'],
  id_token_signing_alg_values_supported: ['RS256'],
  scopes_supported: ['openid', 'email', 'profile', 'address', 'phone'],
  token_endpoint_auth_methods_supported: [
    'client_secret_post',
    'client_secret_basic',
  ],
  claims_supported: ['aud', 'exp', 'iat', 'iss', 'realmid', 'sub'],
};
export default config;
