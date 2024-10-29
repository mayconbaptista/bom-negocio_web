import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'Products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule)},
    {path: '', redirectTo: 'Products', pathMatch: 'full'}
];
