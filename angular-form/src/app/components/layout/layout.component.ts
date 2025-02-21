import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component'; // Adjust the path if needed

@Component({
  selector: 'app-layout',
  standalone: true, // Ensure this is a standalone component
  imports: [CommonModule, RouterOutlet, NavbarComponent], // Import necessary modules
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {}
