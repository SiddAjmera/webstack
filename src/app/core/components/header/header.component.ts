import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() sectionClick: EventEmitter<string> = new EventEmitter<string>();

  onSectionClick (sectionName) {
    this.sectionClick.emit(sectionName);
  }

}
