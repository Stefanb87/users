import {Injectable} from "@angular/core";
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {UserService} from "../services/users.service";
import {map, Observable} from "rxjs";


@Injectable({ providedIn: 'root' })
export class UsernameAsyncValidator {
  constructor() {
  }

  static createValidator(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return userService
        .isUsernameUnique(control.value)
        .pipe(
          map((result: boolean) =>
            result ? { usernameAlreadyExists: true } : null
          )
        );
    };
  }
}
