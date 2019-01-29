import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-fun-fact",
  templateUrl: "./fun-fact.component.html",
  styleUrls: ["./fun-fact.component.css"]
})
export class FunFactComponent implements OnInit {
  @Input() quote: any;

  constructor() {}

  ngOnInit() {}
}
