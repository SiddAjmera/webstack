import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-intro-card',
  templateUrl: './about-intro-card.component.html',
  styleUrls: ['./about-intro-card.component.css']
})
export class AboutIntroCardComponent implements OnInit {

  @Input() intro: any;

  constructor() { }

  ngOnInit() {
  }

}
