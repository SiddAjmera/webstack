// tslint:disable:max-line-length

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-timeline',
  templateUrl: './schedule-timeline.component.html',
  styleUrls: ['./schedule-timeline.component.css']
})
export class ScheduleTimelineComponent implements OnInit {

  eventDays = [
    { isActive: true, date: '26th January', dayOfWeek: 'SATURDAY' },
    /* { isActive: false, date: '6th June', dayOfWeek: 'SATURDAY' },
    { isActive: false, date: '7th June', dayOfWeek: 'SUNDAY' }, */
  ];

  talks = [
    {
      image: 'https://scontent.fpnq2-1.fna.fbcdn.net/v/t1.0-9/35426833_1654903297897980_4957177869231980544_n.jpg?_nc_cat=111&_nc_ht=scontent.fpnq2-1.fna&oh=d17e6d51e9336ad48da5aaaa4d47338f&oe=5CD24DEF',
      timeslot: '03.00 - 03.30 PM',
      title: 'Crashing into Angular',
      speaker: 'Siddharth Ajmera',
      description: 'A very short, crisp, and consize introduction to Angular and all it\'s building blocks. You\'ll learn about Modules, Components, Directives, Pipes, Guards etc in Angular in this talk.'
    },
    {
      image: 'https://pbs.twimg.com/profile_images/1024004701065338882/Qs4GJJpC_400x400.jpg',
      timeslot: '03.30 - 04.00 AM',
      title: 'Topic yet to be decided',
      speaker: 'Pankaj Parkar',
      description: 'Pankaj is yet to decide his topic for the talk.'
    },
    {
      image: 'assets/images/speakers/akshay.jpg',
      timeslot: '04.00 - 04.30 PM',
      title: 'Creating a reusable Component Library in Angular',
      speaker: 'Akshay Milmile',
      description: 'A guide to creating Angular Component Libraries for Dummies. In this talk, Akshay will explain how easy it is to build and deploy a reusable Component Library in Angular'
    },
    {
      image: 'https://scontent.fpnq2-1.fna.fbcdn.net/v/t1.0-9/27750647_1609902509057835_604483265165669179_n.jpg?_nc_cat=109&_nc_ht=scontent.fpnq2-1.fna&oh=76b18049eb616ecbf5df6a68536571b4&oe=5CC952D5',
      timeslot: '04.30 - 05.00 PM',
      title: 'Angular Style Guide',
      speaker: 'Jagdeep Soni',
      description: 'A guide to creating highly scalable, and performant Angular Apps that are easy to write, read, and manage.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
