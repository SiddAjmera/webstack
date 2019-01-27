import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaker-card-square',
  templateUrl: './speaker-card-square.component.html',
  styleUrls: ['./speaker-card-square.component.css']
})
export class SpeakerCardSquareComponent implements OnInit {

  @Input() speaker: any;
  @Input() imgStyle: any;

  constructor() { }

  ngOnInit() {
  }

}
