import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  err:any;
  constructor(private _AuthService:AuthService, private _Router:Router) { }
  loginForm:FormGroup = new FormGroup({
    'email': new FormControl(),
    'password': new FormControl()
  });


  getFormData(loginForm){
    if(loginForm.invalid !== true){
      this._AuthService.signin(loginForm.value).subscribe((res)=>{
        if(res['message'] == 'success'){
          this._AuthService.saveUserData(res['user'],res['token']);
          this._Router.navigate(['home']);

        }else{
          this.err= res['message'];
        }
      });
    }

  }


  ngOnInit(): void {
  }

}
