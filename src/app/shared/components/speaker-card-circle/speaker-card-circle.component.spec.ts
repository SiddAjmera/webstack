import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerCardCircleComponent } from './speaker-card-circle.component';

describe('SpeakerCardCircleComponent', () => {
  let component: SpeakerCardCircleComponent;
  let fixture: ComponentFixture<SpeakerCardCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerCardCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerCardCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
