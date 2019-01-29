import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "src/app/services/data/data.service";

@Component({
  selector: "app-time",
  templateUrl: "./time.component.html",
  styleUrls: ["./time.component.css"]
})
export class TimeComponent implements OnInit {
  timeData$: Observable<any>;
  talks$: Observable<any[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.timeData$ = this.dataService.getTimeDetails();
    this.talks$ = this.dataService.getTalksList();
  }
}
