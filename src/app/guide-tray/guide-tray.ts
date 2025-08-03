import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guide-tray',
  templateUrl: './guide-tray.html',
  styleUrls: ['./guide-tray.css'],
  standalone: true,
  imports: [CommonModule]
})
export class GuideTrayComponent {
  visible = true;
  isClosing = false;

  constructor(private router: Router) {}

  handleClose() {
    this.isClosing = true;
    setTimeout(() => {
      this.visible = false;
      this.router.navigate(['/']); // Navigate to Home Page
    }, 300); // 300ms for dissolve animation
  }

  navigateToGuide() {
    this.router.navigate(['/octo-guide']);
  }
}