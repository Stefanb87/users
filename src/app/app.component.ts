import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UserService} from "../services/users.service";
import {UsersQuery} from "../store/users-query";
import {User} from "../models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isModalActive = false;
  users$?: Observable<User[]>;

  constructor(private userService: UserService, private usersQuery: UsersQuery) {}

  ngOnInit(): void {
    this.users$ = this.usersQuery.selectUsers$;
  }

  onAddUser() {
    this.isModalActive = true;
  }

  onCloseModal(event: boolean) {
    this.isModalActive = event;
  }
}
