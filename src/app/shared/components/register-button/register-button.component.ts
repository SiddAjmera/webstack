import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data/data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-register-button",
  templateUrl: "./register-button.component.html",
  styleUrls: ["./register-button.component.css"]
})
export class RegisterButtonComponent implements OnInit {
  registerLink$: Observable<string>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.registerLink$ = this.dataService.getRegisterLink();
  }
}
