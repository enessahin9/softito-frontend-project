import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  products: Product[] = []
  @Output() addCartItem: EventEmitter<number> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.httpClient.get<Product[]>("/assets/products.json").subscribe(result => {
      this.products = result;
    })
  }
}