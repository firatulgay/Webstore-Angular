import { Injectable } from '@angular/core';
import { User } from '../login/User';

@Injectable()
export class AccountService {

  constructor() { }

  isLoggedIn=false;

  login(user:User):boolean{

    if (user.userName=="firat" && user.password=="12345") {
      this.isLoggedIn = true;
      localStorage.setItem("isLoggedIn",user.userName)
      return true;
    }
    return false;
  }

  logOut(){
    localStorage.removeItem("isLoggedIn");
    this.isLoggedIn=false;
  }

   isUserLoggedIn(){
     return this.isLoggedIn;
   }

}
