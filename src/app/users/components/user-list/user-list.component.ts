import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../user.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]> = new Observable<User[]>();
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}