import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/classes/project';
import { Stage } from 'src/app/classes/stage';
import { ProjectsService } from 'src/app/services/backend-services/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  idProject: number = 0;
  project: Project|null = null;

  tabs = [
    "Overview",
    "Stages",
    "Team",
    "Reports",
    "Results",
    "Budget & Resources",
    "Settings"
  ];
  currentTab = "Overview";

  constructor(private route: ActivatedRoute, private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>
      {this.idProject = Number(params["id"]);}
    );
    
    const observer = {
      next: (response: HttpResponse<any>) => this.processDetailsResponse(response)
    }
    this.projectsService.getProjectDetails(this.idProject).subscribe(observer);
  }

  processDetailsResponse(response: HttpResponse<any>){
    if(response.ok){
      this.project = response.body.project;
    }
  }

  changeTab(tab: string){
    this.currentTab = tab;
  }

  onStageCreated(stage: Stage){
    this.project?.stages.push(stage);
  }

}
