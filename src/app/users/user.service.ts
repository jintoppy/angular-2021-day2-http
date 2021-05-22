import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

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
