import { Component,HostListener} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl:'./about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
    constructor(private router: Router) {}


    @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrolled = window.scrollY;
    const parallaxSection = document.getElementById('parallax-section');
    if (parallaxSection) {
      parallaxSection.style.backgroundPositionY = `${scrolled * 0.10}px`;
    }
  }



  testimonials = [
    {
      image: '/assets/images/testimonial-1.jpg',
      text: "FOLK is more than just a club; it's a family. The teachings and workshops have helped me develop strong values and a sense of purpose that I was missing before.",
      name: "Raghavendra",
      position: "Civil Services Mentor"
    },
    {
      image: '/assets/images/testimonial-2.jpg',
      text: "The club's emphasis on holistic development has helped me strike a balance between academics, extracurriculars, and personal well-being.",
      name: "Sahith",
      position: "PhD Researcher, BITS HYD"
    }
  ];

  customOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    nav: true,
    dots: false,
    navText: ['<div class="nav-btn prev-slide"> < </div>', '<div class="nav-btn next-slide"> > </div>'],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
  };
}
