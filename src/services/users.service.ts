import { Injectable } from '@angular/core';
import {UserStore} from "../store/user.store";
import {delay, Observable, of} from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private usersStore: UserStore) {
  }

  isUsernameUnique(name: string): Observable<boolean> {
    const users = this.usersStore.getValue().users;

    return of(Object.values(users).some(user => user.name === name)).pipe(delay(1000));
  }

}
