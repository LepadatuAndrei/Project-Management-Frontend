import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  baseUrl = environment.server;
  resourceUrl = "/ResearchProjects";

  constructor(private httpClient: HttpClient) { }

  getProjectsPage(pageNum: number, pageSize: number, orderBy: string, orderAscending: boolean){
    return this.httpClient.get(this.baseUrl+this.resourceUrl+"/GetPage", {
      headers: {Authorization: "Bearer " + localStorage.getItem("jwt")},
      observe: "response",
      params: {"pageNum": pageNum, "pageSize": pageSize, "orderBy": orderBy, "orderAscending": orderAscending}
    });
  }

  getProjectDetails(id: number){
    return this.httpClient.get(this.baseUrl + this.resourceUrl + "/GetDetails", {
      headers: {Authorization: "Bearer " + localStorage.getItem("jwt")},
      observe: "response",
      params: {"id": id}
    });
  }

  createProject(body: any) {
    return this.httpClient.post(this.baseUrl + this.resourceUrl + "/Create", body, {
      headers: {Authorization: "Bearer " + localStorage.getItem("jwt")},
      observe: "response"
    });
  }

  updateProject(body: any){
    return this.httpClient.patch(this.baseUrl + this.resourceUrl + "/Update", body, {
      headers: {Authorization: "Bearer " + localStorage.getItem("jwt")},
      observe: "response"
    })
  }

  deleteProject(idProject: number){
    return this.httpClient.delete(this.baseUrl + this.resourceUrl + "/Delete", {
      headers: {Authorization: "Bearer " + localStorage.getItem("jwt")},
      observe: "response",
      params: {"idProject": idProject}
    });
  }
}
