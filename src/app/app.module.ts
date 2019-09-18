import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DateDirective } from './date.directive';
import {DatePipe} from '@angular/common';
import { Date1Directive } from './date1.directive';



@NgModule({
  declarations: [
    AppComponent,
    DateDirective,
    Date1Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
