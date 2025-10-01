import { Component, inject } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth-service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgStyle
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm : FormGroup;

  private readonly fb = inject(FormBuilder)

  private readonly authService = inject(AuthService);

  constructor() {
    this.loginForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  login(){
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value);
      this.loginForm.reset();
    }

  }
}
