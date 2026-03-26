import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stage } from 'src/app/classes/stage';

@Component({
  selector: 'app-details-stages',
  templateUrl: './details-stages.component.html',
  styleUrls: ['./details-stages.component.css']
})
export class DetailsStagesComponent implements OnInit {
  @Input() stages: Stage[] = []
  @Input() idProject: number = 0

  @Output() stageCreatedEvent = new EventEmitter<Stage>()

  displayState: string = "list";
  selectedStage: Stage|null = null;

  constructor() { }

  ngOnInit(): void {
  }

  changeDisplay(displayState: string){
    if(displayState != 'info'){
      this.selectedStage = null;
    }
    this.displayState = displayState;
  }

  selectStage(stage: Stage){
    this.selectedStage = stage;
    this.changeDisplay("info");
  }

  onStageCreated(stage: Stage){
    this.stageCreatedEvent.emit(stage);
    this.selectStage(stage);
  }
  onStageDeleted(){
    this.stages.splice(
      this.stages.findIndex((s: Stage) => s.idStage == this.selectedStage?.idStage),
      1
    );
    this.changeDisplay("list");
  }

}
