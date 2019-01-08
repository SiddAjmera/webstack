import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {

  intros = [
    {
      reason: 'Great Speakers',
      details: 'How you transform your business as technology, consumer, habits industry dynamic',
      number: '01',
      icon: 'icon-speaker'
    }, {
      reason: 'New People',
      details: 'How you transform your business as technology, consumer, habits industry dynamic',
      number: '02',
      icon: 'icon-people'
    }, {
      reason: 'Networking',
      details: 'How you transform your business as technology, consumer, habits industry dynamic',
      number: '03',
      icon: 'icon-netwrorking'
    }, {
      reason: 'Have Fun',
      details: 'How you transform your business as technology, consumer, habits industry dynamic',
      number: '04',
      icon: 'icon-fun'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
