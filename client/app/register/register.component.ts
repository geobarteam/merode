import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'register-component',
  templateUrl: 'app/register/register.html'
})
export class RegisterComponent implements OnInit {
     
     user:User;

     ngOnInit(){
       this.user = new User();
     }

     submit(user:User){
        console.debug(user.email);
     }
}