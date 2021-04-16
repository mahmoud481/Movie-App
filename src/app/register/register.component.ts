import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService, private _Router:Router) { }
  response:any;
  registerForm: FormGroup = new FormGroup({
    'first_name' : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'last_name' : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    'password': new FormControl(null,[Validators.required]),
    'email' : new FormControl(null,[Validators.required,Validators.email]),
    'age' : new FormControl(null,[Validators.required,Validators.min(18),Validators.max(60)]),
  });


  getFormData(registerForm){

    if(registerForm.invalid !== true){
      console.log(registerForm);
      this._AuthService.signup(registerForm.value).subscribe((res)=>{
        if(res['message'] == 'success'){
          this._Router.navigate(['login']);
        }
      });
    }
  }
  ngOnInit(): void {

  }

}
