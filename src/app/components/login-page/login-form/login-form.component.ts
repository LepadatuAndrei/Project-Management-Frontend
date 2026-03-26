import { HttpErrorResponse, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from 'src/app/services/backend-services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  emailInput: FormControl = new FormControl("");
  loginErrorMessage:string = ""

  constructor(
    private loginService: LoginService, private router: Router, 
    private jwt:JwtHelperService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  login(form: NgForm){
    if(!this.validateLogin(form)){
      return;
    }

    const loginPayload = {
      "Email": form.value.emailInput,
      "Password": form.value.passwordInput
    }

    const responseObserver = {
      next: (response:HttpResponse<any>) => this.processResponse(response),
      error: (error:HttpErrorResponse) => this.processError(error)
    };

    this.loginService.login(loginPayload).subscribe(responseObserver);
  }

  validateLogin(form: NgForm){
    if(form.controls["emailInput"].invalid){
      this.loginErrorMessage = "Invalid email.";
    }
    else if(form.controls["passwordInput"].invalid){
      this.loginErrorMessage = "Invalid password.";
    }
    else{
      return true;
    }
    return false;
  }

  processResponse(response: HttpResponse<any>){
    if(response.ok){
      localStorage.setItem("jwt", response.body.token);
      const token = localStorage.getItem("jwt")?.toString();
      if(token != undefined){
        this.userService.update(token);
      }
      else{
        this.userService.update(null);
      }
      
      this.router.navigate([""]);
    }
  }

  processError(error: HttpErrorResponse){
    if(error.status == HttpStatusCode.Forbidden){
      this.loginErrorMessage = "Incorrect email or password."
    }
    else{
      console.log(error.message);
    }
  }

}
