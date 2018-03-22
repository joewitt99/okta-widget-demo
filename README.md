# OktaWidget

Okta widget demo which supports SAML SP-INIT maintaining the correct returnUrl back to Okta for SAML Response.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Configuration

The configurations are contained in a environment.ts file located in src/environments.  Create the directory and file if they don't exist.  Add the following to the environment.ts file.  Use your Okta Tenant and host for your environment.

```javascript
export const environment = {
  production: false,
  oktaWidgetConfig: {
    baseUrl: '<Okta Tenant URL>',
    clientId: '<Client Id from configured application>',
    redirectUri: '<host>/callback',
    authParams: {
      issuer: '<issuer from the okta auth server configuration>',
      authorizeUrl: '<Okta Tenant URL>/oauth2/<Okta Auth Server ID>/v1/authorize',
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
```
