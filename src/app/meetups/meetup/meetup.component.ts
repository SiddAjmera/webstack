import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "src/app/services/data/data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-meetup",
  templateUrl: "./meetup.component.html",
  styleUrls: ["./meetup.component.css"]
})
export class MeetupComponent implements OnInit {
  meetup: any;
  showSlide = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const meetupId = params["meetupId"];
      this.dataService.getMeetupById(meetupId).subscribe((meetup: any) => {
        if (meetup) {
          this.meetup = meetup;
          this.meetup.talks.forEach(talk => (talk.show = false));
        } else {
          this.router.navigate(["/"]);
        }
      });
    });
  }
}
