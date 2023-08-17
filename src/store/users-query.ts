import {Query} from '@datorama/akita';
import { Injectable } from '@angular/core';
import {UsersState, UserStore} from "./user.store";

@Injectable({
  providedIn: 'root'
})
export class UsersQuery extends Query<UsersState> {
  selectUsers$ = this.select("users");
  // @ts-ignore
  constructor(protected store: UserStore) {
    super(store);
  }
}
