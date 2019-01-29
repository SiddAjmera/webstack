import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-speaker-modal",
  templateUrl: "./speaker-modal.component.html",
  styleUrls: ["./speaker-modal.component.css"]
})
export class SpeakerModalComponent implements OnInit {
  @Input() speaker: any;

  constructor() {}

  ngOnInit() {}
}
