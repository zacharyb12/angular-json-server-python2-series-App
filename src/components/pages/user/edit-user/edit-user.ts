import { Component, inject } from '@angular/core';
import { User } from '../../../../core/models/user.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../../core/services/users/user-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
],
  templateUrl: './edit-user.html',
  styleUrl: './edit-user.css'
})
export class EditUser {

id : number | undefined;
userForm : FormGroup;


private readonly userService = inject(UserService);
private route = inject(ActivatedRoute);
private router = inject(Router);
private fb = inject(FormBuilder);



constructor() {
  this.userForm = this.fb.group({
    name : ['' , [Validators.required]],
    email : ['' , [Validators.required, Validators.email]],
  });

  this.id = +this.route.snapshot.params['id'];

  if(this.id){
    this.loadUser(this.id);
  }

}



loadUser(id : number){
this.userService.getUserById(id).subscribe({
  next : (user) => {
    this.userForm.patchValue(user)
  },
  error : (err) => {
    console.error(err)
  }
})
}

updateUser(){
  if(this.userForm.valid && this.id){
    const user : User = this.userForm.value;
    this.userService.updateUser(this.id, user).subscribe({
      next : () => {
        this.router.navigate([`/user/details/${this.id}`]);
      }
    })
}



}

deleteAccount(){
this.userService.deleteUser(this.id!).subscribe({
  next : () => {
    localStorage.clear();
    this.router.navigate(['/']);
  }
});

}




}
