import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('hero') hero: ElementRef;
  @ViewChild('about') about: ElementRef;
  @ViewChild('speakers') speakers: ElementRef;
  @ViewChild('timeline') timeline: ElementRef;
  @ViewChild('news') news: ElementRef;
  @ViewChild('directions') directions: ElementRef;

  navigateToSection (section) {
    switch (section) {
      case 'hero':
        this.hero.nativeElement.scrollIntoView({ behavior: "smooth" });
        break;

      case 'about':
        this.about.nativeElement.scrollIntoView({ behavior: "smooth" });
        break;

      case 'speakers':
        this.speakers.nativeElement.scrollIntoView({ behavior: "smooth" });
        break;

      case 'timeline':
        this.timeline.nativeElement.scrollIntoView({ behavior: "smooth" });
        break;

      case 'news':
        this.news.nativeElement.scrollIntoView({ behavior: "smooth" });
        break;

      case 'directions':
        this.directions.nativeElement.scrollIntoView({ behavior: "smooth" });
        break;
    }
  }

  constructor(private wowService: NgwWowService){
    this.wowService.init();  
  }
 

}
