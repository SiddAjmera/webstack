import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-timeline',
  templateUrl: './schedule-timeline.component.html',
  styleUrls: ['./schedule-timeline.component.css']
})
export class ScheduleTimelineComponent implements OnInit {

  eventDays = [
    { isActive: true, date: '5th June', dayOfWeek: 'FRIDAY' },
    { isActive: false, date: '6th June', dayOfWeek: 'SATURDAY' },
    { isActive: false, date: '7th June', dayOfWeek: 'SUNDAY' },
  ];

  talks = [
    { 
      image: 'assets/images/speakers/speaker1.jpg', 
      timeslot: '11.30 - 12.30 PM', 
      title: 'Reinventing Experiences', 
      speaker: 'Johnsson Agaton', 
      description: 'How you transform your business technolog consumer habits industry dynamics change Find out from those leading the charge How you' 
    }, { 
      image: 'assets/images/speakers/speaker2.jpg', 
      timeslot: '10.30 - 11.30 AM', 
      title: 'Marketing Matters', 
      speaker: 'Henrikon Rebecca', 
      description: 'How you transform your business technolog consumer habits industry dynamics change Find out from those leading the charge How you' 
    }, { 
      image: 'assets/images/speakers/speaker3.jpg', 
      timeslot: '01.30 - 02.30 PM', 
      title: 'Human Centered Design', 
      speaker: 'Fredric Martinsson', 
      description: 'How you transform your business technolog consumer habits industry dynamics change Find out from those leading the charge How you' 
    }, { 
      image: 'assets/images/speakers/speaker4.jpg', 
      timeslot: '12.30 - 01.30 PM', 
      title: 'Cultures of Creativity', 
      speaker: 'Lundryn Melisa', 
      description: 'How you transform your business technolog consumer habits industry dynamics change Find out from those leading the charge How you' 
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
