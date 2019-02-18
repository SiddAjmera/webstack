import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MeetupsComponent } from "../meetups/meetups.component";
import { MeetupComponent } from "../meetups/meetup/meetup.component";
import { HomeComponent } from "../home/home.component";

const appRoutes: Routes = [
  { path: "meetups", component: MeetupsComponent },
  { path: "meetups/:meetupId", component: MeetupComponent },
  { path: "", component: HomeComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { anchorScrolling: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
