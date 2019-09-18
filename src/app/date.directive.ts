import { Directive, ElementRef, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Directive({
  selector: '[appDate]'
})
export class DateDirective implements OnInit {
  constructor(private el: ElementRef, private datePipe: DatePipe) {}

  ngOnInit() {
    this.el.nativeElement.value = this.datePipe.transform(
      new Date(),
      'yyyy-MM-dd'
    );
  }
}
