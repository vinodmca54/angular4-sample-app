import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocenterComponent } from './videocenter.component';

describe('VideocenterComponent', () => {
  let component: VideocenterComponent;
  let fixture: ComponentFixture<VideocenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideocenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
