import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-schedule-timeline-item',
  templateUrl: './schedule-timeline-item.component.html',
  styleUrls: ['./schedule-timeline-item.component.css']
})
export class ScheduleTimelineItemComponent implements OnInit {

  @Input() talk: any;
  @Input() right: boolean;

  constructor() { }

  ngOnInit() {
  }

}
