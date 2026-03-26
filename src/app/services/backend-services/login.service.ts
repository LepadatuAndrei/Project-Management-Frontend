import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  resourceUrl: string = "/Login";
  baseUrl: string = environment.server;

  constructor(private httpClient:HttpClient) { }

  login(body: any) {
    return this.httpClient.post(this.baseUrl + this.resourceUrl + "/LoginUser", body, {
      observe: "response"
    });
  }
}
