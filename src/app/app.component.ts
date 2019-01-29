import { Component, ElementRef, ViewChild } from "@angular/core";
import { NgwWowService } from "ngx-wow";
import { DataService } from "./services/data/data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  quotes$: Observable<any>;

  @ViewChild("hero") hero: ElementRef;
  @ViewChild("about") about: ElementRef;
  @ViewChild("speakers") speakers: ElementRef;
  @ViewChild("timeline") timeline: ElementRef;
  @ViewChild("news") news: ElementRef;
  @ViewChild("directions") directions: ElementRef;

  constructor(
    private dataService: DataService,
    private wowService: NgwWowService
  ) {}

  ngOnInit() {
    this.wowService.init();
    this.quotes$ = this.dataService.getQuotes();
  }

  navigateToSection(section) {
    switch (section) {
      case "hero":
        this.hero.nativeElement.scrollIntoView({ behavior: "smooth" });
        break;

      case "about":
        this.about.nativeElement.scrollIntoView({ behavior: "smooth" });
        break;

      case "speakers":
        this.speakers.nativeElement.scrollIntoView({ behavior: "smooth" });
        break;

      case "timeline":
        this.timeline.nativeElement.scrollIntoView({ behavior: "smooth" });
        break;

      case "news":
        this.news.nativeElement.scrollIntoView({ behavior: "smooth" });
        break;

      case "directions":
        this.directions.nativeElement.scrollIntoView({ behavior: "smooth" });
        break;
    }
  }
}
