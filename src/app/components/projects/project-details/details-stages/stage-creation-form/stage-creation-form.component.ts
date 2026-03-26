import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Stage } from 'src/app/classes/stage';
import { StagesService } from 'src/app/services/backend-services/stages.service';

@Component({
  selector: 'app-stage-creation-form',
  templateUrl: './stage-creation-form.component.html',
  styleUrls: ['./stage-creation-form.component.css']
})
export class StageCreationFormComponent implements OnInit {
  @Input() idProject: number = 0;

  @Output() stageCreatedEvent = new EventEmitter<Stage>();
  @Output() cancelEvent = new EventEmitter();

  alertMsg: string = "";

  constructor(private stagesService: StagesService) { }

  ngOnInit(): void {}

  createStage(form: NgForm){
    if(this.idProject == null){
      return;
    }

    if(form.invalid){
      return;
    }

    const observer = {
      next: (response: HttpResponse<any>) => this.processCreateResponse(response),
      error: (error: HttpErrorResponse) => this.processCreateError(error)
    };

    this.stagesService.create(this.idProject, {
      "Name": form.controls["stageNameInput"].value, "Tasks": form.controls["stageTasksTextarea"].value
    }).subscribe(observer);
  }

  processCreateResponse(response: HttpResponse<any>){
    this.stageCreatedEvent.emit(response.body["stage"]);
  }
  processCreateError(error: HttpErrorResponse){
    if(error.status != 400){
      console.log(error);
    }
    else{
      this.alertMsg = error.error.message;
    }
  }

  cancel(){
    this.cancelEvent.emit();
  }

}
