import { Component, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";

import { DataService } from "src/app/services/data/data.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent {
  subscriptionEmail: string;
  footerData$: Observable<any>;
  registrationLink$: Observable<string>;
  constructor(private dataService: DataService) {}

  @Output() sectionClick: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this.footerData$ = this.dataService.getFooterData();
    this.registrationLink$ = this.dataService.getRegisterLink();
  }

  onSectionClick(sectionName) {
    this.sectionClick.emit(sectionName);
  }

  onSubscribe() {
    this.dataService
      .saveSubscriptionEmail(this.subscriptionEmail)
      .then(response => {
        this.subscriptionEmail = "";
        alert("Sweet! We'll hit you up if we come up with something 😉");
      });
  }
}
