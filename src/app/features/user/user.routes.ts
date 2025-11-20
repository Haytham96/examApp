import { Routes } from '@angular/router';
import { UserLayoutComponent } from '../../layouts/user-layout/user-layout.component';

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {
        path: 'exams',
        loadComponent: () =>
          import('./pages/exams/exams.component').then((c) => c.ExamsComponent),
        title: 'Exams Pages',
      },
    ],
  },
];
