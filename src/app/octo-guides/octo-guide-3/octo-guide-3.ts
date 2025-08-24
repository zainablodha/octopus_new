import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OctoGuideCardComponent } from '../octo-guide-card/octo-guide-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-octo-guide-3',
  standalone: true,
  imports: [CommonModule, OctoGuideCardComponent],
  templateUrl: './octo-guide-3.html',
  styleUrl: './octo-guide-3.css'
})
export class OctoGuide3Component {

  constructor(private router: Router) {}
  step = 3;
  totalSteps = 4;
  question = 'Your goals for the next 3 months ?';

  options = [
    'Build a more diverse and inclusive workforce',
    'Improve employee happiness and engagement',
    'Hire top talent faster and more efficiently',
    'Fill open positions more quickly',
    'Reduce the cost of hiring qualified employees',
    'Accelerate skill development and learning efficiency'
  ];

  selectedValue: string = '';

  selectOption(value: string) {
    this.selectedValue = value;
  }

   handleNext() {
    this.router.navigate(['/octo-guide-4']);
  }
}
