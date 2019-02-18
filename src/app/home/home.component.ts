import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { NgwWowService } from "ngx-wow";
import { DataService } from "../services/data/data.service";
import { Observable } from "rxjs";
import { NavigationService } from "../services/navigation/navigation.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  quotes$: Observable<any>;

  @ViewChild("hero") hero: ElementRef;
  @ViewChild("about") about: ElementRef;
  @ViewChild("speakers") speakers: ElementRef;
  @ViewChild("timeline") timeline: ElementRef;
  @ViewChild("news") news: ElementRef;
  @ViewChild("directions") directions: ElementRef;

  constructor(
    private dataService: DataService,
    private wowService: NgwWowService,
    private navigationService: NavigationService
  ) {}

  ngOnInit() {
    this.wowService.init();
    this.quotes$ = this.dataService.getQuotes();
    this.navigationService.sectionToNavigateTo$.subscribe(sectionToNavigateTo =>
      this.navigateToSection(sectionToNavigateTo)
    );
  }

  private navigateToSection(section) {
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
