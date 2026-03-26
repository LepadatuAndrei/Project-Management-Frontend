import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StagesService {

  baseUrl = environment.server;
  resourceUrl = "/Stages";

  constructor(private httpClient: HttpClient) { }

  create(idProject: number, body: any){
    return this.httpClient.post(this.baseUrl + this.resourceUrl + "/Create", body, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt")
      },
      observe: "response",
      params: {
        "idProject": idProject
      }
    });
  }

  delete(idStage: number){
    return this.httpClient.delete(this.baseUrl + this.resourceUrl + "/Delete", {
      headers: {Authorization: "Bearer " + localStorage.getItem("jwt")},
      observe: "response",
      params: {
        "idStage": idStage
      }
    });
  }
}
