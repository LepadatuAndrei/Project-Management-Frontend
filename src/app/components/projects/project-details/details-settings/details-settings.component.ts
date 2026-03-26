import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/backend-services/projects.service';

@Component({
  selector: 'app-details-settings',
  templateUrl: './details-settings.component.html',
  styleUrls: ['./details-settings.component.css']
})
export class DetailsSettingsComponent implements OnInit {
  @Input() idProject: number = 0;

  constructor(private projectsService: ProjectsService, private router: Router) { }

  ngOnInit(): void {
  }

  onDeleteButtonPressed(){
    const observer = {
      next: (response: HttpResponse<any>) => {this.processDeleteResponse(response)},
      error: (error: HttpErrorResponse) => {this.processDeleteError(error)}
    };
    this.projectsService.deleteProject(this.idProject).subscribe(observer);
  }
  processDeleteResponse(response: HttpResponse<any>){
    this.router.navigate(["/"]);
  }
  processDeleteError(error: HttpErrorResponse){
    console.log(error.error.message);
  }

}
