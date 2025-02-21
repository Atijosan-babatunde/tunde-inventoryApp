import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true, // Ensure it's standalone
  imports: [CommonModule], // Add any required imports
  template: `<nav><h3>Dashboard is here</h3></nav>`,
})
export class NavbarComponent {}
