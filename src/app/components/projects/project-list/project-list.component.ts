import { HttpErrorResponse, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Project } from 'src/app/classes/project';
import { ProjectsService } from 'src/app/services/backend-services/projects.service';
import { UserService } from 'src/app/services/user.service';
import { Counter } from 'src/app/utility/counter';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  pageSize:number = 10;
  projectsPage:Project[] = [];
  currentPage:number = 0;
  totalPageNumber:number = 0;
  counter:Counter = new Counter;


  constructor(
    private projectsService:ProjectsService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.changePage(1);
  }

  loadPage(pageNum:number){
    var projectLoadObserver = {
      next: (response:HttpResponse<any>) => this.processResponse(response),
      error: (error:HttpErrorResponse) => this.processError(error)
    }
    this.projectsService.getProjectsPage(pageNum, this.pageSize, "IdProject", true)
      .subscribe(projectLoadObserver);
  }

  changePage(pageNum:number){
    this.currentPage = pageNum;
    this.loadPage(this.currentPage);
  }

  processResponse(response:HttpResponse<any>){
    if(response.ok)
    {
      this.projectsPage = response.body.page;
      this.totalPageNumber = response.body.pageNumber;
    }
    
  }

  processError(error:HttpErrorResponse){
    if(error.status == HttpStatusCode.Unauthorized){
      const tokenObj = UserService.tokenObject;
      if(tokenObj != null){
        this.userService.update(null);
      }
    }
    else{
      console.log(error.message);
    }
  }
}
