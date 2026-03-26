import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stage } from 'src/app/classes/stage';
import { StagesService } from 'src/app/services/backend-services/stages.service';

@Component({
  selector: 'app-stage-info',
  templateUrl: './stage-info.component.html',
  styleUrls: ['./stage-info.component.css']
})
export class StageInfoComponent implements OnInit {
  @Input() stage: Stage|null = null;

  @Output() backButtonPressEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();

  constructor(private stagesService: StagesService) { }

  ngOnInit(): void {
  }

  onBackButtonPressed(){
    this.backButtonPressEvent.emit();
  }

  onDeleteButtonPressed(){
    if(this.stage != null){
      const observer = {
        next: (response: HttpResponse<any>) => {this.processDeleteResponse(response)},
        error: (error: HttpErrorResponse) => {this.processDeleteError(error)}
      }
      this.stagesService.delete(this.stage.idStage).subscribe(observer);
    }
  }
  processDeleteResponse(response: HttpResponse<any>){
    this.deleteEvent.emit();
  }
  processDeleteError(error: HttpErrorResponse){
    console.log(error);
  }

}
