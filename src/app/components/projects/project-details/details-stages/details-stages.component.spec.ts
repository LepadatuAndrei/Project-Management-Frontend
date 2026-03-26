import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStagesComponent } from './details-stages.component';

describe('DetailsStagesComponent', () => {
  let component: DetailsStagesComponent;
  let fixture: ComponentFixture<DetailsStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsStagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
