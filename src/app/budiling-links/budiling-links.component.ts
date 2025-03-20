import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budiling-links',
  standalone: false,
  templateUrl: './budiling-links.component.html',
  styleUrl: './budiling-links.component.css'
})
export class BudilingLinksComponent {
  handle(){
   console.log("New folk website")
   alert("Now you in building")

  }

  constructor(private router: Router) {}

}
