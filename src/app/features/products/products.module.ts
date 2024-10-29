import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsHomeComponent } from './components/products-home/products-home.component';

const routes: Routes = [
  {path: 'Home', component: ProductsHomeComponent},
  {
    path: 'Category/:id', 
    loadComponent: () => import('./components/products-category-list/products-category-list.component').then(m => m.ProductsCategoryListComponent)
  },
  {
    path: 'List/:categoryid',
    loadComponent: () => import('./components/products-list/products-list.component').then(m => m.ProductsListComponent)
  },
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: '**', redirectTo: 'Home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})
export class ProductsModule { }
