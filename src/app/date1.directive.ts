import { Directive, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';

@Directive({
  selector: '[appDate1]'
})
export class Date1Directive {
  date = new Date();
  myDate = this.date.setDate(this.date.getDate() + 1);

  constructor(  private el: ElementRef, private datePipe: DatePipe ) {
    this.el.nativeElement.value = this.datePipe.transform(
      this.myDate,
      'yyyy-MM-dd'
    );
  }

}
