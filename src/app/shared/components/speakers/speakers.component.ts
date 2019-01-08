import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  speakers = [
    {
      name: 'Siddharth Ajmera',
      designation: 'Full Stack JS Developer - TCS',
      // image: 'assets/images/speakers/speaker1.jpg',
      image: 'https://scontent.fpnq2-1.fna.fbcdn.net/v/t1.0-9/35426833_1654903297897980_4957177869231980544_n.jpg?_nc_cat=111&_nc_ht=scontent.fpnq2-1.fna&oh=d17e6d51e9336ad48da5aaaa4d47338f&oe=5CD24DEF',
      details: ''
    }, {
      name: 'Pankaj Parkar',
      designation: 'Tech Lead, Synerzip',
      // image: 'assets/images/speakers/speaker5.jpg',
      image: 'https://pbs.twimg.com/profile_images/1024004701065338882/Qs4GJJpC_400x400.jpg',
      details: ''
    }, {
      name: 'Akshay Milmile',
      designation: 'Full Stack JS Developer - TCS',
      image: 'https://pbs.twimg.com/profile_images/1058594005263491072/psCeJF5B_400x400.jpg',
      // image: 'assets/images/speakers/speaker3.jpg',
      details: ''
    }, {
      name: 'Ek Bandi',
      designation: 'Role, Company',
      image: 'assets/images/speakers/speaker7.jpg',
      details: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
