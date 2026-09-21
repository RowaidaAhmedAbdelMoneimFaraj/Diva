import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
  showPassword : boolean = false;
  loginForm = new FormGroup({
    userEmail: new FormControl(null, [Validators.required, Validators.email]),
    userPassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    ]),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
  displayPassword(){
    this.showPassword = !this.showPassword;
  }
}
