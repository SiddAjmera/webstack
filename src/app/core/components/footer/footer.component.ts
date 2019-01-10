import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  @Output() sectionClick: EventEmitter<string> = new EventEmitter<string>();

  onSectionClick (sectionName) {
    this.sectionClick.emit(sectionName);
  }

}
