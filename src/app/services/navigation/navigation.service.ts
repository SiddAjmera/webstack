import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NavigationService {
  private sectionToNavigateTo: Subject<string> = new Subject<string>();
  sectionToNavigateTo$: Observable<
    string
  > = this.sectionToNavigateTo.asObservable();

  navigateToSection(section: string) {
    this.sectionToNavigateTo.next(section);
  }
}
