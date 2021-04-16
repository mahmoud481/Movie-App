import { UserData } from './userData';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:any = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient) { }

  // signUp
  signup(data){
    return this._HttpClient.post("http://routeegypt.herokuapp.com/signup",data);
  }

  // signin
  signin(data){
    return this._HttpClient.post("http://routeegypt.herokuapp.com/signin",data);
  }
  // Save user Data For Token

  saveUserData(citizen,token){
    let user = new UserData(citizen.first_name, citizen.last_name, citizen.email, token);
    this.userData.next(user);
  }
}
