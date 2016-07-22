import { Component, OnInit } from '@angular/core';
import { User } from '../model/user/user';
import { UserService } from '../services/user.service'


@Component({
  moduleId: module.id,
  selector: 'register-component',
  templateUrl: 'register.html'
})
export class RegisterComponent implements OnInit {

     user:User;
     step=1;
     submitted = false;

    constructor(private userService:UserService){

    }

    get diagnostic() { return JSON.stringify(this.user); }

     ngOnInit(){
       this.user = new User();
     }

     onSubmit(){  
        this.userService.registerUser(this.user).then((result)=>{
          console.warn('user saved!');
          this.submitted = true;
        })
        
     }
}