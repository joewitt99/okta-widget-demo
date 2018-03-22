import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Okta } from './services/okta.service';
import { OktaAuthGuard } from './services/app.guard';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [OktaAuthGuard] },
  { path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    Okta,
    OktaAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
