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
      details: 'Most of our speakers are MVPs, GDEs, and Subject Matter Experts in their fields',
      number: '01',
      icon: 'icon-speaker'
    }, {
      reason: 'New People',
      details: 'We also encourage you to join us as a speaker if you feel you\'ve done something worth sharing',
      number: '02',
      icon: 'icon-people'
    }, {
      reason: 'Networking',
      details: 'You\'ll get to know and meet some of the giants in the Web Development Industry',
      number: '03',
      icon: 'icon-netwrorking'
    }, {
      reason: 'Have Fun',
      details: 'In case you\'re a foodie, we have free snacks, plus there\'s photo sessions, merchandise, and much more',
      number: '04',
      icon: 'icon-fun'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
