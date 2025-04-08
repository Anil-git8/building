import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-residency',
  standalone: false,
  templateUrl: './residency.component.html',
  styleUrl: './residency.component.css'
})
export class ResidencyComponent implements AfterViewInit {

  
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const elements = this.el.nativeElement.querySelectorAll('[data-toggle="counter-up"]');
    elements.forEach((el: HTMLElement) => {
      const finalValue = parseInt(el.innerText, 10);
      this.animateCount(el, finalValue);
    });
  }

  animateCount(element: HTMLElement, end: number, duration: number = 2000) {
    let start = 0;
    const range = end - start;
    const increment = end > 100 ? Math.ceil(end / 60) : 1;
    const stepTime = Math.max(Math.floor(duration / range), 30);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      element.innerText = `${start}`;
    }, stepTime);
  }

}
