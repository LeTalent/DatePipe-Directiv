import { Component, OnInit, Input } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  date = new Date();
  date1 = this.date.setDate(this.date.getDate() + 1);
  day = this.date.getDate();
  nextDay = this.date.getDate() + 1;
  month = this.date.getMonth() + 1;
  nextMonth = this.date.getMonth() + 2;
  year = this.date.getFullYear();
  nextYear = this.date.getFullYear() + 1;
  datum = new Date();



  constructor() {  }

  ngOnInit() {
  }

  public input_date() {
   const tag = this.date.getDate() + 1;
   const monate = this.date.getMonth() + 1;
   const jahre = this.date.getFullYear();
   const jour = tag + "." + "0" + monate + "." + jahre;
    return jour ;
  }

}
