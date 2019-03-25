import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { DataService } from "src/app/services/data/data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  activeSection = "home";
  registerLink$: Observable<string>;
  eventLink$: Observable<any[]>;

  @Output() sectionClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.registerLink$ = this.dataService.getRegisterLink();
    this.eventLink$ = this.dataService.getMeetups();
  }

  onSectionClick(sectionName) {
    this.activeSection = sectionName;
    this.sectionClick.emit(sectionName);
  }
}
