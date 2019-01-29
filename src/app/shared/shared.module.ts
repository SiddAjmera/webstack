import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "../app-routing/app-routing.module";
import { HeadingComponent } from "./components/heading/heading.component";
import { EventCountdownComponent } from "./components/event-countdown/event-countdown.component";
import { AboutIntroCardComponent } from "./components/about-intro-card/about-intro-card.component";
import { SpeakerCardComponent } from "./components/speaker-card/speaker-card.component";
import { ScheduleTimelineComponent } from "./components/schedule-timeline/schedule-timeline.component";
import { ScheduleTimelineItemComponent } from "./components/schedule-timeline-item/schedule-timeline-item.component";
import { NewsCardComponent } from "./components/news-card/news-card.component";
import { NewsComponent } from "./components/news/news.component";
import { SponsorsComponent } from "./components/sponsors/sponsors.component";
import { SpeakersComponent } from "./components/speakers/speakers.component";
import { EventDateComponent } from "./components/event-date/event-date.component";
import { AboutSectionComponent } from "./components/about-section/about-section.component";
import { HeroComponent } from "./components/hero/hero.component";
import { DirectionComponent } from "./components/direction/direction.component";
import { DirectionTabContentComponent } from "./components/direction-tab-content/direction-tab-content.component";
import { RegisterButtonComponent } from "./components/register-button/register-button.component";
import { SpeakerModalComponent } from "./components/speaker-modal/speaker-modal.component";
import { VenueComponent } from "./components/venue/venue.component";
import { TimeComponent } from "./components/time/time.component";
import { GetThereComponent } from "./components/get-there/get-there.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { FunFactComponent } from "./components/fun-fact/fun-fact.component";
import { SafePipe } from "./pipes/safe/safe.pipe";

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [
    HeadingComponent,
    EventCountdownComponent,
    AboutIntroCardComponent,
    SpeakerCardComponent,
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
    SpeakerModalComponent,
    VenueComponent,
    TimeComponent,
    GetThereComponent,
    ExperienceComponent,
    FunFactComponent,
    SafePipe
  ],
  exports: [
    AppRoutingModule,
    HeadingComponent,
    AboutSectionComponent,
    SpeakerCardComponent,
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
    SpeakerModalComponent,
    ExperienceComponent,
    FunFactComponent,
    SafePipe
  ]
})
export class SharedModule {}
