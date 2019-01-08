import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  @Input() smallTitle: string;
  @Input() smallTitleColor: string;
  @Input() bigTitle: string;
  @Input() bigTitleColor: string;
  @Input() textAlignment: string;
  
  constructor() { }

  ngOnInit() {
  }

}
