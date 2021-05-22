import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Product } from './models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello';
  products$: Observable<Product[]> = new Observable<Product[]>();
  constructor(private appService: AppService) {
    this.products$ = this.appService.getProducts();
  }
}
