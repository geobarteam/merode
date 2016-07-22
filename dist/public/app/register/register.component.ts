import { Component, OnInit } from '@angular/core';
import { User } from '../model/user/user';
import { UserService } from '../services/user.service'
import { Validators } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'register-component',
  directives: [REACTIVE_FORM_DIRECTIVES],
  templateUrl: 'register.html'
})
export class RegisterComponent implements OnInit {
     
     myForm: FormGroup;
     user:User;
     step=1;
     submitted = false;
     emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     events: any[] = [];

    constructor(private userService:UserService, private _fb: FormBuilder){ }

     ngOnInit(){
       this.myForm = this._fb.group({
            email: ['', [<any>Validators.required, <any>Validators.pattern(this.emailRegex.source)]],
            password: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        })
        this.subcribeToFormChanges();
        
     }
     subcribeToFormChanges() {
        const myFormStatusChanges$ = this.myForm.statusChanges;
        const myFormValueChanges$ = this.myForm.valueChanges;
        myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        myFormValueChanges$.subscribe(x => this.events.push({ 
          event: 'VALUE_CHANGED', object: x 
        }));
    }

     save(user:User, isValid: boolean){  
        this.userService.registerUser(this.user).then((result)=>{
          console.warn('user saved!');
          this.submitted = true;
        })
        
     }
}