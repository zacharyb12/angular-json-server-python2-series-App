import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../core/models/user.model';
import { UserService } from '../../../../core/services/users/user-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [
    AsyncPipe
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {

  users : Observable<User[]> | undefined;

  private readonly userService = inject(UserService);

  constructor(){
    this.users = this.userService.getAllUsers() ;
  }
}
