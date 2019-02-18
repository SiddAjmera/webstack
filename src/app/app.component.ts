import { Component } from "@angular/core";

import { NavigationService } from "./services/navigation/navigation.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private navigationService: NavigationService) {}

  navigateToSection(sectionName: string) {
    this.navigationService.navigateToSection(sectionName);
  }
}
