import { Component, Output, EventEmitter } from "@angular/core";
import { DataService } from "src/app/services/data/data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent {
  footerData$: Observable<any>;
  constructor(private dataService: DataService) {}

  @Output() sectionClick: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.footerData$ = this.dataService.getFooterData();
  }

  onSectionClick(sectionName) {
    this.sectionClick.emit(sectionName);
  }
}
