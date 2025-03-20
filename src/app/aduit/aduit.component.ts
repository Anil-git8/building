import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aduit',
  standalone: false,
  templateUrl: './aduit.component.html',
  styleUrl: './aduit.component.css'
})
export class AduitComponent {
  constructor(private router: Router) {}


}
