import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageCreationFormComponent } from './stage-creation-form.component';

describe('StageCreationFormComponent', () => {
  let component: StageCreationFormComponent;
  let fixture: ComponentFixture<StageCreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageCreationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
