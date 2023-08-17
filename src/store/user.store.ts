import { Store, StoreConfig} from '@datorama/akita';
import { User } from "../models/user";
import {Injectable} from "@angular/core";

export interface UsersState {
  users: User[];
}

export function createInitialState(): UsersState {
    return {
      users: [
    {
      id: 1,
      name: "Name one",
      active: true
    },
    {
      id: 2,
      name: "Name two",
      active: false
    },
    {
      id: 3,
      name: "Name three",
      active: true
    }
  ],
    };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'users' })
export class UserStore extends Store<UsersState> {
  constructor() {
    super(createInitialState());
  }
}
