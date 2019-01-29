import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "src/app/services/data/data.service";

@Component({
  selector: "app-direction",
  templateUrl: "./direction.component.html",
  styleUrls: ["./direction.component.css"]
})
export class DirectionComponent implements OnInit {
  map$: Observable<any>;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.map$ = this.dataService.getMapConfig();
  }
}
