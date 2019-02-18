import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-ppt-modal",
  templateUrl: "./ppt-modal.component.html",
  styleUrls: ["./ppt-modal.component.css"]
})
export class PptModalComponent implements OnInit {
  @Input() id: string;
  @Input() pptLink: string;

  constructor() {}

  ngOnInit() {}
}
