import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    ScrollingModule
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  public products: Product[] = [];
}
