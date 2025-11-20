import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((c) => c.AUTH_ROUTES),
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/user/user.routes').then((c) => c.USER_ROUTES),
  },
];
