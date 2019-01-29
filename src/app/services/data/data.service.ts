import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  items: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {}

  getRegisterLink(): Observable<any> {
    return this.db.object("/header/registerLink").valueChanges();
  }

  getHeroComponentData(): Observable<any> {
    return this.db.object("/hero").valueChanges();
  }

  getEventDateTime(): Observable<any> {
    return this.db.object("/countdown/eventDateTime").valueChanges();
  }

  getSpeakersList(): Observable<any> {
    return this.db.object("/speakers").valueChanges();
  }

  getEventDays(): Observable<any> {
    return this.db.object("/eventDays").valueChanges();
  }

  getTalksList(): Observable<any> {
    return this.db.object("/talks").valueChanges();
  }

  getVenueDetails(): Observable<any> {
    return this.db.object("/venue").valueChanges();
  }

  getTimeDetails(): Observable<any> {
    return this.db.object("/time").valueChanges();
  }

  getDirectionDetails(): Observable<any> {
    return this.db.object("/directions").valueChanges();
  }

  getMapConfig(): Observable<any> {
    return this.db.object("/map").valueChanges();
  }

  getFooterData(): Observable<any> {
    return this.db.object("/footer").valueChanges();
  }

  getQuotes(): Observable<any> {
    return this.db.object("/quotes").valueChanges();
  }
}
