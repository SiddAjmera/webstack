import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgwWowModule } from 'ngx-wow';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, CoreModule, SharedModule, AppRoutingModule, NgwWowModule],
  exports: [],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

