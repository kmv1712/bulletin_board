import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BbListComponent } from './bb-list/bb-list.component';
import { BbDetailComponent } from './bb-detail/bb-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BbListComponent,
    BbDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
