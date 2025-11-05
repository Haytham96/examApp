import { Routes } from '@angular/router';
import { UserLayoutComponent } from '../../layouts/user-layout/user-layout.component';
import { PRODUCT_ROUTES } from './products/product.routes';

export const USER_ROUTES: Routes = [
  { path: '', component: UserLayoutComponent, children: [...PRODUCT_ROUTES] },
];
