import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product';
import { User } from './models/user';
import { map, retry } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public userTypes$: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  getUsers() {
    let url = 'https://api.github.com/users';
    const observable1 = this.http.get<User[]>(url);
    const observable2 = observable1.pipe(
      retry(3),
      map((data) => {
        // const newData = data.map((item) => {
        //   return {
        //     ...item,
        //     login: item.login + item.node_id,
        //   };
        // });
        return [data[2]];
      })
    );
    return observable2;
  }
}
