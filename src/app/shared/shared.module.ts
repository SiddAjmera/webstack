import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './components/heading/heading.component';
import { EventCountdownComponent } from './components/event-countdown/event-countdown.component';
import { AboutIntroCardComponent } from './components/about-intro-card/about-intro-card.component';
import { SpeakerCardSquareComponent } from './components/speaker-card-square/speaker-card-square.component';
import { SpeakerCardCircleComponent } from './components/speaker-card-circle/speaker-card-circle.component';
import { ScheduleTimelineComponent } from './components/schedule-timeline/schedule-timeline.component';
import { ScheduleTimelineItemComponent } from './components/schedule-timeline-item/schedule-timeline-item.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { NewsComponent } from './components/news/news.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { SpeakersComponent } from './components/speakers/speakers.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeadingComponent, EventCountdownComponent, AboutIntroCardComponent, SpeakerCardSquareComponent, SpeakerCardCircleComponent, ScheduleTimelineComponent, ScheduleTimelineItemComponent, NewsCardComponent, NewsComponent, SponsorsComponent, SpeakersComponent],
  exports: [
    HeadingComponent,
    AboutIntroCardComponent,
    SpeakerCardSquareComponent,
    SpeakerCardCircleComponent,
    ScheduleTimelineComponent,
    NewsComponent,
    NewsCardComponent,
    SponsorsComponent,
    SpeakersComponent
  ]  
})
export class SharedModule { }
