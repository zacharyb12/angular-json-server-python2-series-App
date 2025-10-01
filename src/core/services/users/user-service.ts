import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
    private url = 'http://localhost:3000/user';

  private readonly httpClient = inject(HttpClient);

  getAllUsers(){
    return this.httpClient.get<User[]>(this.url);
  }

  getUserById(id : number){
    return this.httpClient.get<User>(`${this.url}/${id}`);
  }

  deleteUser(id : number){
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  updateUser(id : number, user : User){
    return this.httpClient.put(`${this.url}/${id}`, user);
  }
}
