import { HttpErrorResponse, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/backend-services/projects.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-project-creation-form',
  templateUrl: './project-creation-form.component.html',
  styleUrls: ['./project-creation-form.component.css']
})
export class ProjectCreationFormComponent implements OnInit {

  formErrorMessage: string|null = null;

  constructor(
    private projectsService:ProjectsService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  create(form: NgForm){
    if(form.invalid){
      return;
    }

    const payload = {
      "Name": form.controls["projectNameInput"].value,
      "Description": form.controls["projectDescriptionTextarea"].value,
      "Objectives": form.controls["projectObjectivesTextarea"].value,
      "UserId": UserService.tokenObject["userId"],
      "Stages": null
    }
    const observer = {
      next: (response: HttpResponse<any>) => this.processResponse(response),
      error: (error: HttpErrorResponse) => this.processError(error)
    }
    this.projectsService.createProject(payload).subscribe(observer)
  }

  processResponse(response: HttpResponse<any>){
    //navigate to project details
    this.router.navigate(["ResearchProjects/Details"], {queryParams:{id: response.body.id}});
  }
  processError(error: HttpErrorResponse){
    if(error.status == HttpStatusCode.BadRequest){
      this.formErrorMessage = "Invalid data";
    }
  }

}
