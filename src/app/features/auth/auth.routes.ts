import { Routes } from '@angular/router';
import { AuthLayoutComponent } from '../../layouts/auth-layout/auth-layout.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },

      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.component').then((c) => c.LoginComponent),
        title: 'Login',
      },
      {
        path: 'createaccount',
        loadComponent: () =>
          import('./pages/create-account/create-account.component').then(
            (c) => c.CreateAccountComponent
          ),
        title: 'CreateAccount',
      },

      {
        path: 'forgotpassword',
        loadComponent: () =>
          import('./pages/forgot-password/forgot-password.component').then(
            (c) => c.ForgotPasswordComponent
          ),
        title: 'Forgot Password',
      },
    ],
  },
];
