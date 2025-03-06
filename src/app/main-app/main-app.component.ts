import { Component, AfterViewInit } from '@angular/core';

declare var $: any; // Declare jQuery for use in Angular

@Component({
  selector: 'app-main-app',
  standalone: false,
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css'] // Corrected (should be an array)
})
export class MainAppComponent implements AfterViewInit { // Fixed syntax

  ngAfterViewInit(): void {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      items: 1
    });
  }

  activeContent: number = 1; 

  showContent(contentNumber: number) {
    this.activeContent = contentNumber;
  }
}
