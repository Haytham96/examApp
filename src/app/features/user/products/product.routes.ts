import { Routes } from '@angular/router';

export const PRODUCT_ROUTES: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products.component').then(
        (c) => c.ProductsComponent
      ),
  },
];
