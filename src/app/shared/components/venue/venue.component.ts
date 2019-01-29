import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { DataService } from "src/app/services/data/data.service";

@Component({
  selector: "app-venue",
  templateUrl: "./venue.component.html",
  styleUrls: ["./venue.component.css"]
})
export class VenueComponent implements OnInit {
  venueDetails$: Observable<any>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.venueDetails$ = this.dataService.getVenueDetails();
  }
}
