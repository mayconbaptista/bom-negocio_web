import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'Products', pathMatch: 'full'},
    {path: 'Products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule)}
];
