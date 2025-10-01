import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth-service';
import { UserAdd } from '../../../core/models/user-add.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

registerForm : FormGroup;

private readonly fb = inject(FormBuilder)
private readonly authService = inject(AuthService);
private readonly router = inject(Router);


constructor() {
  this.registerForm = this.fb.group({
    name : ['',[Validators.required, Validators.minLength(3)]],
    email : ['',[Validators.required, Validators.email]],
    password : ['',[Validators.required, Validators.minLength(6)]],
  });
}


register(){
  if(this.registerForm.valid){

    const newUser : UserAdd = this.registerForm.value;

    this.authService.register(newUser);
  }
}


}
