import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  sponsors = [
    {
      image: 'assets/images/sponsors/sponsor1.png',
      name: ''
    }, {
      image: 'assets/images/sponsors/sponsor2.png',
      name: ''
    }, {
      image: 'assets/images/sponsors/sponsor3.png',
      name: ''
    }, {
      image: 'assets/images/sponsors/sponsor4.png',
      name: ''
    }, {
      image: 'assets/images/sponsors/sponsor5.png',
      name: ''
    }, {
      image: 'assets/images/sponsors/sponsor6.png',
      name: ''
    }, {
      image: 'assets/images/sponsors/sponsor7.png',
      name: ''
    }, {
      image: 'assets/images/sponsors/sponsor8.png',
      name: ''
    }, {
      image: 'assets/images/sponsors/sponsor9.png',
      name: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
