import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../models/user/user.model';
import { LoginForm } from '../../models/user/loginform.model';
import { UserAdd } from '../../models/user/user-add.model';
import { UserService } from '../users/user-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private url = 'http://localhost:3000/user';

  private readonly httpClient = inject(HttpClient);
  private readonly userService = inject(UserService);
  private readonly router = inject(Router);

  isLogged = signal<boolean>(false);
  isAdmin = signal<boolean>(false);


  constructor() {
    const role = localStorage.getItem('role');
    if (role) {
      this.isLogged.set(true);
      this.isAdmin.set(role === 'admin');
    }
  }

  login(loginForm : LoginForm) : void {
    this.httpClient.get<User[]>(this.url).subscribe({
      next : (users) => {
        const user = users.find(u => u.email === loginForm.email && u.password === loginForm.password);

        if (user) {
          localStorage.setItem('role' , user.role);
          localStorage.setItem('id' , user.id.toString());
          this.isLogged.set(true);
          this.isAdmin.set(user.role === 'admin');
        }
      }
    })
  }


  logout() {
    localStorage.removeItem('role');
    this.isLogged.set(false);
    this.isAdmin.set(false);
  }


  register(newUser : UserAdd){
    const user : User = {
      id : this.getCountUser().toString(),
      name : newUser.name,
      email : newUser.email,
      password : newUser.password,
      role : 'user'
    }
    this.httpClient.post<User>(this.url, user).subscribe({
      next : (response) => {
        this.login({email : newUser.email, password : newUser.password});
        this.router.navigate(['/'] );
      }
    })
  }


  getCountUser() : number {
    let count = 0;
    this.userService.getAllUsers().subscribe({
      next : (users) => {
         count = users.length;
      }
    })
    return count + 1;
  }

  
}
