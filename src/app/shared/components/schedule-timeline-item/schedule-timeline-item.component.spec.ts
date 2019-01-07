import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTimelineItemComponent } from './schedule-timeline-item.component';

describe('ScheduleTimelineItemComponent', () => {
  let component: ScheduleTimelineItemComponent;
  let fixture: ComponentFixture<ScheduleTimelineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleTimelineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTimelineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
