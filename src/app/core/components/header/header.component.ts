import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  activeSection = 'home';

  @Output() sectionClick: EventEmitter<string> = new EventEmitter<string>();

  onSectionClick (sectionName) {
    this.activeSection = sectionName;
    this.sectionClick.emit(sectionName);
  }

}
