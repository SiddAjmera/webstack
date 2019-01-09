import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing/app-routing.module';
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
import { EventDateComponent } from './components/event-date/event-date.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { HeroComponent } from './components/hero/hero.component';
import { DirectionComponent } from './components/direction/direction.component';
import { DirectionTabContentComponent } from './components/direction-tab-content/direction-tab-content.component';
import { RegisterButtonComponent } from './components/register-button/register-button.component';
import {SpeakerModalComponent } from './components/speaker-modal/speaker-modal.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    HeadingComponent,
    EventCountdownComponent,
    AboutIntroCardComponent,
    SpeakerCardSquareComponent,
    SpeakerCardCircleComponent,
    ScheduleTimelineComponent,
    ScheduleTimelineItemComponent,
    NewsCardComponent,
    NewsComponent,
    SponsorsComponent,
    SpeakersComponent,
    EventDateComponent,
    AboutSectionComponent,
    HeroComponent,
    DirectionComponent,
    DirectionTabContentComponent,
    RegisterButtonComponent,
    SpeakerModalComponent
  ],
  exports: [
    AppRoutingModule,
    HeadingComponent,
    AboutSectionComponent,
    SpeakerCardSquareComponent,
    SpeakerCardCircleComponent,
    ScheduleTimelineComponent,
    NewsComponent,
    NewsCardComponent,
    SponsorsComponent,
    SpeakersComponent,
    HeroComponent,
    EventCountdownComponent,
    DirectionComponent,
    DirectionTabContentComponent,
    RegisterButtonComponent,
    SpeakerModalComponent
  ]
})
export class SharedModule { }
