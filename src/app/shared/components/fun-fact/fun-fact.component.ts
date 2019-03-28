import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "src/app/services/data/data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-fun-fact",
  templateUrl: "./fun-fact.component.html",
  styleUrls: ["./fun-fact.component.css"]
})
export class FunFactComponent implements OnInit {
  @Input() quote: any;
  stats$: Observable<any>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.stats$ = this.dataService.getStats();
  }
}
