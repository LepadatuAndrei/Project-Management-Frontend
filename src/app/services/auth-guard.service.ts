import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private helper: JwtHelperService,
    private router: Router,
    private userService: UserService
    ) {}

  canActivate() {
    var token = localStorage.getItem("jwt");
    if(token && !this.helper.isTokenExpired(token)){
      return true;
    }
    else{
      this.userService.update(null);
      return false;
    }
  }
}
