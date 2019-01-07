import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerCardSquareComponent } from './speaker-card-square.component';

describe('SpeakerCardSquareComponent', () => {
  let component: SpeakerCardSquareComponent;
  let fixture: ComponentFixture<SpeakerCardSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerCardSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerCardSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
