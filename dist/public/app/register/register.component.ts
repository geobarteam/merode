import { Component, OnInit } from '@angular/core';
import { User } from '../model/user/user';
import { UserService } from '../services/user.service'


@Component({
  moduleId: module.id,
  selector: 'register-component',
  templateUrl: 'register.html'
})
export class RegisterComponent implements OnInit {

     
    constructor(private userService:UserService){

    }

     user:User;

     ngOnInit(){
       this.user = new User();
     }

     submit(user:User){
        this.userService.registerUser(user).then((result)=>{
          console.warn('user saved!');
        })
        
     }
}