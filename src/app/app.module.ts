import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, Injectable, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ROUTES} from './routes';

import {AppComponent} from './app.component';
import {LandingComponent} from './landing/component';
import {LoginComponent} from './account/login/component';
import {RegisterComponent} from './account/register/component';

import {InterfaceComponent} from './interface/component';
import {DashboardComponent} from './interface/dashboard/component';
import {LicencesComponent} from './interface/licences/component';
import {NotFoundComponent} from './error/not-found/component';

import {AuthService} from './_services/AuthService';

import * as Sentry from '@sentry/browser';
import { CookieService } from 'ngx-cookie-service';
import {AuthGuard} from './_guards/AuthGuard';
import {TicketService} from './_services/TicketService';

Sentry.init({
  dsn: 'https://54d0ac366d9b48688bd8bf5c57dbd09d@sentry.io/1297713'
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {
  }

  handleError(error) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    InterfaceComponent,
    DashboardComponent,
    LicencesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, {enableTracing: true}),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: SentryErrorHandler},
    AuthGuard,
    CookieService,
    AuthService,
    TicketService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
