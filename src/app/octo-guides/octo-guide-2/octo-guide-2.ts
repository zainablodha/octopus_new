import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OctoGuideCardComponent } from '../octo-guide-card/octo-guide-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-octo-guide-2',
  standalone: true,
  imports: [CommonModule, FormsModule, OctoGuideCardComponent],
  templateUrl: './octo-guide-2.html',
  styleUrl: './octo-guide-2.css'
})
export class OctoGuide2Component {

  constructor(private router: Router) {}
  step = 2;
  totalSteps = 4;
  question = "What's your current top HR priority?";

  options = [
    { label: 'Building or scaling HR systems', value: 'hr-systems' },
    { label: 'Enhancing employee engagement', value: 'engagement' },
    { label: 'Hiring faster and smarter', value: 'hiring' },
    { label: 'Fixing performance or culture issues', value: 'performance' },
    { label: 'Navigating a restructure or change', value: 'restructure' },
    { label: 'Learning & development of employees', value: 'learning' },
    { label: 'Something else', value: 'other' }
  ];

  selectedValues: string[] = [];

  otherPriority: string = '';

toggleOption(value: string) {
  const index = this.selectedValues.indexOf(value);
  if (index > -1) {
    this.selectedValues.splice(index, 1);
  } else {
    this.selectedValues.push(value);
  }
}

  handleNext() {
    this.router.navigate(['/octo-guide-3']);
  }

}
