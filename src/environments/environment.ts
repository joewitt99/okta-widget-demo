// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  oktaWidgetConfig: {
    baseUrl: 'https://ienergycloud.oktapreview.com',
      clientId: '0oaebvdradAWPRYyo0h7',
    redirectUri: 'http://localhost:4200/callback',
    authParams: {
    issuer: 'https://ienergycloud.oktapreview.com/oauth2/auseblc3wv9PSUKv10h7',
      authorizeUrl: 'https://ienergycloud.oktapreview.com/oauth2/auseblc3wv9PSUKv10h7/v1/authorize',
      responseType: ['id_token', 'token'],
      scopes: ['openid', 'profile']
  },
    features: {
      rememberMe: true,
        smsRecovery: true,
        selfServiceUnlock: true
    }
  }
};
