import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-speaker-card",
  templateUrl: "./speaker-card.component.html",
  styleUrls: ["./speaker-card.component.css"]
})
export class SpeakerCardComponent implements OnInit {
  @Input() speaker: any;
  @Input() imgStyle: any;

  constructor() {}

  ngOnInit() {}
}
