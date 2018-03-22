import { Injectable } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';

@Injectable()
export class Okta {
  widget;

  constructor() {
    this.widget = new OktaSignIn({
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
    });
  }

  /**
   * Checks if there is a current accessToken in the TokenManager.
   */
  isAuthenticated() {
    return !!this.widget.tokenManager.get('accessToken');
  }

  getWidget() {
    return this.widget;
  }
}
