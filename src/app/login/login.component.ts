import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Okta } from '../services/okta.service';
import {SsprService} from '../services/sspr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;
  returnUrl: string;
  oktaSignIn;

  constructor(private route: ActivatedRoute,
              private changeDetectorRef: ChangeDetectorRef,
              private router: Router,
              private okta: Okta,
              private sspr: SsprService) {
      this.oktaSignIn = okta.getWidget();
  }

  ngOnInit() {
    this.oktaSignIn.session.close(() => { this.router.navigate(['login'] ); } );
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || null;
    this.showLogin();
  }

  showLogin() {
    this.oktaSignIn.renderEl({el: '#okta-login-container'}, (response) => {
      console.log(response);
      if (response.status === 'SUCCESS') {
        this.user = response[0].claims.email;
        this.oktaSignIn.tokenManager.add('idToken', response[0]);
        this.oktaSignIn.tokenManager.add('accessToken', response[1]);
        this.oktaSignIn.remove();
        // check for sms config for SSPR
        this.sspr.checkAccount().subscribe(resp => console.log(resp));
        this.changeDetectorRef.detectChanges();
        if (this.returnUrl) {
          // redirect to returnUrl.  This case handles the case of sp-initiated sign-on.
          window.location.href = this.returnUrl;
        } else if (response[0].claims.URLHeader) {
          // redirect to claim.  This case handles users which have a Claim defining the default redirect
          window.location.href = response[0].claims.URLHeader;
        } else {
          // Take to the home component.
          this.router.navigate(['']);
        }
        // this.router.navigate(['']);
      }
    });
  }

}
