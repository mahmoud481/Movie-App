import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AuthService}  from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean = false;
  constructor(private _AuthService:AuthService, private _Router:Router) {

   }

  ngOnInit(): void {
    this._AuthService.userData.subscribe((data)=>{
      if(data){
        this.isLogin=true;
      }else{
        this.isLogin= false;
      }
    })
  }

  onLogout(){
    // console.log(this._AuthService.userData);
    // this._AuthService.userData=null;
    // console.log(this._AuthService.userData);
    this.isLogin=false;
    this._Router.navigate(['/login']);
  }
}
