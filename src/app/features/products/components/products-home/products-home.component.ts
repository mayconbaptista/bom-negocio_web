import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-products-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule
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
  ];

  constructor() { }
}
