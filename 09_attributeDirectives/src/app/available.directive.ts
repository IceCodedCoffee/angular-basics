import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAvailable]'
})
export class AvailableDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.textDecoration = 'line-through';
    el.nativeElement.style.color = 'red'
  }
}
