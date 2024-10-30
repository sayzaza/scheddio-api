import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: '.env' });

const config = {
  clientId: process.env.QUICKBOOKS_CLIENT_ID,
  clientSecret: process.env.QUICKBOOKS_CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
  configurationEndpoint: process.env.QUICKBOOKS_CONFIGURATION_ENDPOINT,
  api_uri: process.env.QUICKBOOKS_CONFIGURATION_ENDPOINT,
  scopes: {
    sign_in_with_intuit: [
      'com.intuit.quickbooks.accounting',
      'com.intuit.quickbooks.payment',
      'openid',
      'profile',
      'email',
      'phone',
      'address',
    ],
    connect_to_quickbooks: [
      'com.intuit.quickbooks.accounting',
      'com.intuit.quickbooks.payment',
    ],
    connect_handler: [
      'com.intuit.quickbooks.accounting',
      'com.intuit.quickbooks.payment',
      'openid',
      'profile',
      'email',
      'phone',
      'address',
    ],
  },
};
export default config;