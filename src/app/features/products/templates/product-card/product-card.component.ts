import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})

export class ProductCardComponent implements OnInit{

  @Input() product!: Product;

  constructor() { }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
