import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/users.service";
import {UsernameAsyncValidator} from "../../validators/username-async-validator";

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss']
})
export class AddUserModal implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  @Output() closeModalEvent = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder, private usersService: UserService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      { name: ['', Validators.required, [UsernameAsyncValidator.createValidator(this.usersService)]] }
    );
  }

  onClose() {
    this.closeModalEvent.emit(false);
  }

  onCreateUser() {
    console.log("user created");
  }

  onSubmit() {
    console.log("submitted");
  }
}
