import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DateDirective } from './date.directive';
import {DatePipe} from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    DateDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
