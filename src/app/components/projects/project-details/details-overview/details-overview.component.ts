import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/classes/project';
import { ProjectsService } from 'src/app/services/backend-services/projects.service';

@Component({
  selector: 'app-details-overview',
  templateUrl: './details-overview.component.html',
  styleUrls: ['./details-overview.component.css']
})
export class DetailsOverviewComponent implements OnInit {
  @Input() project: Project|null = null;
  modifyMode: boolean = false;
  alertMsg: string = "";

  name: string = "";
  description: string = "";
  objectives: string = "";

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.resetTextareaValues();
  }

  resetTextareaValues(){
    if(this.project != null){
      this.name = this.project.projectName;
      this.description = this.project.projectDescription;
      this.objectives = this.project.projectObjectives;
    }
  }

  toggleModifyMode(){
    this.modifyMode = !this.modifyMode;
    this.alertMsg = "";
  }

  saveChanges(){
    if(this.project != null){
      if(this.name.length < 5 || this.name.length > 100){
        this.alertMsg = "Project name must be between 5 and 100 characters long."
        return;
      }
      if(this.description.length > 10000){
        this.alertMsg = "Project description must be up to 10000 characters long."
        return;
      }
      if(this.objectives.length > 10000){
        this.alertMsg = "Project objectives must be up to 10000 characters long."
        return;
      }

      const updateObserver = {
        next: (response: HttpResponse<any>) => this.processUpdateResponse(response),
        error: (error: HttpErrorResponse) => this.processUpdateError(error)
      };
      this.projectsService.updateProject({
        "Id": this.project?.idProject,
        "Name": this.name,
        "Description": this.description,
        "Objectives": this.objectives
      }).subscribe(updateObserver);
    }
  }

  discardChanges(){
    this.resetTextareaValues();
    this.toggleModifyMode();
  }

  processUpdateResponse(response: HttpResponse<any>){
    if(this.project != null){
      this.project.projectName = this.name;
      this.project.projectDescription = this.description;
      this.project.projectObjectives = this.objectives;
    }
    this.toggleModifyMode();
  }
  processUpdateError(error: HttpErrorResponse){
    this.alertMsg = error.error.message;
  }

}
