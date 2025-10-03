import { Component, inject } from '@angular/core';
import { User } from '../../../../core/models/user/user.model';
import { UserService } from '../../../../core/services/users/user-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css'
})
export class UserDetails {

user : User | undefined;

id : number | undefined;

private readonly userService = inject(UserService);
private readonly activRoute = inject(ActivatedRoute);
private readonly router = inject(Router);

constructor() {
  this.id = +this.activRoute.snapshot.params['id'];

  if(this.id){
    this.getUser(this.id);
  }

}

getUser(id : number){
  this.userService.getUserById(id).subscribe({
    next : (userResponse)=> {
      this.user = userResponse;
    }
  })
}

navigateToEdit(){
this.router.navigate([`/user/edit/${this.id}`]);
}

}
