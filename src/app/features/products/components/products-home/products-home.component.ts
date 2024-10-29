import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Product } from '../../interfaces/product';
import { Category } from '../../interfaces/category';
import { MatDividerModule} from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-products-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    RouterLink,
    CurrencyPipe,
    NgOptimizedImage
  ],
  templateUrl: './products-home.component.html',
  styleUrl: './products-home.component.scss'
})
export class ProductsHomeComponent {

  public products: Product[] = [
    {
      id: 1,
      name: 'Amazon echo', 
      description: 'Amazon echo preto', 
      price: 250.00, 
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61b4qFTXRML._AC_SL1000_.jpg',
      isAvailable: true,
      category: 'Smart Home',
      quantity: 10,
      rating: 4.5
    },
    {
      id: 2,
      name: 'Amazon echo dot', 
      description: 'Amazon echo dot preto', 
      price: 150.00, 
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._AC_SL1000_.jpg',
      isAvailable: true,
      category: 'Smart Home',
      quantity: 10,
      rating: 4.5
    },
    {
      id: 3,
      name: 'Amazon echo show', 
      description: 'Amazon echo show preto', 
      price: 350.00, 
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61b4qFTXRML._AC_SL1000_.jpg',
      isAvailable: true,
      category: 'Smart Home',
      quantity: 10,
      rating: 4.5
    },
    {
      id: 4,
      name: 'Amazon echo', 
      description: 'Amazon echo preto', 
      price: 250.00, 
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61b4qFTXRML._AC_SL1000_.jpg',
      isAvailable: true,
      category: 'Smart Home',
      quantity: 10,
      rating: 4.5
    },
    {
      id: 5,
      name: 'Amazon echo dot', 
      description: 'Amazon echo dot preto', 
      price: 150.00, 
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._AC_SL1000_.jpg',
      isAvailable: true,
      category: 'Smart Home',
      quantity: 10,
      rating: 4.5
    },
    {
      id: 6,
      name: 'Amazon echo show', 
      description: 'Amazon echo show preto', 
      price: 350.00, 
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61b4qFTXRML._AC_SL1000_.jpg',
      isAvailable: true,
      category: 'Smart Home',
      quantity: 10,
      rating: 4.5
    }
  ];

  public categories: Category[] = [
    { id: 1, name: 'Smart Home', description: 'Smart home devices',imageUrl:'', products: this.products },
    { id: 2, name: 'Smartphones', description: 'Smartphones',imageUrl:'', products: this.products },
    { id: 3, name: 'Computers', description: 'Computers',imageUrl:'', products: this.products },
    { id: 4, name: 'Headphones', description: 'Headphones',imageUrl:'', products: this.products }
  ];

  constructor() { }
}
