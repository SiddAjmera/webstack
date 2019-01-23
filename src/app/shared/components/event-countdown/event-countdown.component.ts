import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-event-countdown',
  templateUrl: './event-countdown.component.html',
  styleUrls: ['./event-countdown.component.css']
})
export class EventCountdownComponent implements OnInit, OnDestroy {

  countDownDate = new Date('Feb 16, 2019 15:00:00').getTime();
  interval;
  days;
  hours;
  minutes;
  seconds;

  constructor() { }

  ngOnInit() {

    // Update the count down every 1 second
    this.interval = setInterval(() => {

      // Get todays date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = this.countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
