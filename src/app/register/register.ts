import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { RouterLink } from '@angular/router';


function passwordMatch(group: AbstractControl): ValidationErrors | null {
  const password = group.get('userPassword')?.value;
  const confirm = group.get('confirmPassword')?.value;
  return password === confirm ? null : { mismatch: true };
}
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  showPassword: boolean = false;
  showConfirmingpassword: boolean = false;
  registerForm = new FormGroup(
    {
      userFullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/),
      ]),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: passwordMatch },
  );

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
  displayPassword() {
    this.showPassword = !this.showPassword;
  }
  displayConfirmedpassword() {
    this.showConfirmingpassword = !this.showConfirmingpassword;
  }
}
