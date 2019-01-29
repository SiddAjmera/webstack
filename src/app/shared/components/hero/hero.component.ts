import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroComponentData$: Observable<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.heroComponentData$ = this.dataService.getHeroComponentData();
  }

}
