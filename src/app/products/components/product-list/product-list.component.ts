import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> = new Observable<Product[]>();
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }
}
