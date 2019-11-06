import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExpDetailsComponent } from './work-exp-details.component';

describe('WorkExpDetailsComponent', () => {
  let component: WorkExpDetailsComponent;
  let fixture: ComponentFixture<WorkExpDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExpDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExpDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
