import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BbListComponent } from './bb-list/bb-list.component';
import { BbDetailComponent } from './bb-detail/bb-detail.component';
import { BbService } from './bb.service';

registerLocaleData(localeRu, 'ru');

const appRoutes: Routes = [
	{path: ':pk', component: BdDetailComponent},
	{path: '', component: BbListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BbListComponent,
    BbDetailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClienModule,
    FormsModule
    AppRoutingModule
  ],
  providers: [
  	{provide: LOCALE_ID, useValue: 'ru'},
	BbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
