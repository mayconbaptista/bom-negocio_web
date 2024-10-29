import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-products-category-list',
  standalone: true,
  imports: [],
  templateUrl: './products-category-list.component.html',
  styleUrl: './products-category-list.component.scss'
})
export class ProductsCategoryListComponent {

  public products: Product[] = [];

  constructor() { }
}
