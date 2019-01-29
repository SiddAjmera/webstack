import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "src/app/services/data/data.service";

@Component({
  selector: "app-get-there",
  templateUrl: "./get-there.component.html",
  styleUrls: ["./get-there.component.css"]
})
export class GetThereComponent implements OnInit {
  directions$: Observable<any>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.directions$ = this.dataService.getDirectionDetails();
  }
}
