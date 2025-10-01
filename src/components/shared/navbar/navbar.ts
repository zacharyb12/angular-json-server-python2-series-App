import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../core/services/auth/auth-service';
import { Login } from "../login/login";

@Component({
  selector: 'app-navbar',
  imports: [
    NgbNavModule,
    NgbDropdownModule,
    RouterLink,
    Login
],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

isLogged = signal<boolean>(false);
isAdmin = signal<boolean>(false);

authService = inject(AuthService);
private router = inject(Router)

constructor() {
this.isLogged = this.authService.isLogged;
this.isAdmin = this.authService.isAdmin;
}

logout(){
  this.authService.logout();
}

redirectToDetails(){
  const id = localStorage.getItem('id');
  if(id){
    this.router.navigate([`/user/details/${id}`]);
  }
  else{
    this.router.navigate(['/']);
  }
}

redirectToRegister(){
  this.router.navigate(['/register']);
}

}
