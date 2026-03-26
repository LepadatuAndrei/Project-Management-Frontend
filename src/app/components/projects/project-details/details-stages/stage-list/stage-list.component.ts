import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stage } from 'src/app/classes/stage';

@Component({
  selector: 'app-stage-list',
  templateUrl: './stage-list.component.html',
  styleUrls: ['./stage-list.component.css']
})
export class StageListComponent implements OnInit {
  @Input() stages: Stage[] = [];

  @Output() addNewStageEvent = new EventEmitter();
  @Output() stageSelectEvent = new EventEmitter<Stage>();

  constructor() { }

  ngOnInit(): void {
  }

  addButtonPressed(){
    this.addNewStageEvent.emit();
  }

  stageSelected(stage: Stage){
    this.stageSelectEvent.emit(stage);
  }

}
