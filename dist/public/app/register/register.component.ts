import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import 

@Component({
  moduleId: module.id,
  selector: 'register-component',
  templateUrl: 'register.html'
})
export class RegisterComponent implements OnInit {
     
     user:User;

     ngOnInit(){
       this.user = new User();
     }

     submit(user:User){
        
     }
}