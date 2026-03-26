import { EventEmitter, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static userUpdated = new EventEmitter();
    
  static tokenObject:any = null;

  constructor(private jwt:JwtHelperService){}

  update(token: string|null){
      if(token == null){
          localStorage.removeItem("jwt");
          UserService.tokenObject = null;
      }
      else{
          localStorage.setItem("jwt", token);
          UserService.tokenObject = this.jwt.decodeToken(token);
      }
      UserService.userUpdated.emit();
  }

  init(){
    const token = localStorage.getItem("jwt");
    if(token == null || this.jwt.isTokenExpired(token)){
      localStorage.removeItem("jwt");
      UserService.tokenObject = null;
    }
    else{
      UserService.tokenObject = this.jwt.decodeToken(token);
    }
  }
}
