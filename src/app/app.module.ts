import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgwWowModule } from 'ngx-wow';
import { AppFirebaseModule } from './app-firebase/app-firebase.module';
import { HomeComponent } from './home/home.component';
import { MeetupsComponent } from './meetups/meetups.component';
import { MeetupComponent } from './meetups/meetup/meetup.component';

@NgModule({
  declarations: [ AppComponent, HomeComponent, MeetupsComponent, MeetupComponent ],
  imports: [ AppFirebaseModule, BrowserModule, CoreModule, SharedModule, AppRoutingModule, NgwWowModule],
  exports: [],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

