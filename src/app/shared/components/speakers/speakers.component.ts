import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  speakers = [
    {
      name: 'David Robert',
      designation: 'Cheif Architecture',
      image: 'assets/images/speakers/speaker1.jpg',
      details: ''
    }, {
      name: 'Melisa Lundryn',
      designation: 'Lead Designer, Payol',
      image: 'assets/images/speakers/speaker5.jpg',
      details: ''
    }, {
      name: 'Agaton Johnsson',
      designation: 'Developer Expert',
      image: 'assets/images/speakers/speaker3.jpg',
      details: ''
    }, {
      name: 'Rebecca Henrikon',
      designation: 'Founder, Cards',
      image: 'assets/images/speakers/speaker7.jpg',
      details: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
