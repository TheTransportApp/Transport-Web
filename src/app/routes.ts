import {Routes} from '@angular/router';
import {LandingComponent} from './landing/component';
import {LoginComponent} from './account/login/component';
import {RegisterComponent} from './account/register/component';
import {InterfaceComponent} from './interface/component';
import {DashboardComponent} from './interface/dashboard/component';
import {LicencesComponent} from './interface/licences/component';
import {NotFoundComponent} from './error/not-found/component';
import {AuthGuard} from './_guards/AuthGuard';

export const ROUTES: Routes = [
  // Landing page
  {
    path: '',
    component: LandingComponent
  },
  // Register page
  {
    path: 'register',
    component: RegisterComponent,
  },
  // Login page
  {
    path: 'login',
    component: LoginComponent
  },
  // Dashboard route (skeleton)
  {
    path: 'dashboard',
    component: InterfaceComponent,
    children: [
      // Dashboard page
      {
        path: '',
        component: DashboardComponent
      },
      // Licences page
      {
        path: 'licences',
        component: LicencesComponent
      }
    ],
    canActivate: [AuthGuard]
  },
  // 404 Error handling
  {
    path: '**',
    component: NotFoundComponent
  }
];
