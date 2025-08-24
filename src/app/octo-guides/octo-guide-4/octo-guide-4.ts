import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OctoGuideCardComponent } from '../octo-guide-card/octo-guide-card';

@Component({
  selector: 'app-octo-guide-4',
  standalone: true,
  imports: [CommonModule, FormsModule, OctoGuideCardComponent],
  templateUrl: './octo-guide-4.html',
  styleUrl: './octo-guide-4.css'
})
export class OctoGuide4Component {
  step = 4;
  totalSteps = 4;

  orgSizes = ['<50 employees', '50-200 employees', '200-1000 employees', '1000+ employees'];
  orgSize = this.orgSizes[0];

  helpOptions = [
    { label: 'Yes, actively looking', value: 'active' },
    { label: 'Considering options', value: 'considering' },
    { label: 'Not at the moment', value: 'not' }
  ];
  helpLooking = 'active';

  supportOptions = [
    { label: 'Strategic HR consulting', value: 'hr-consulting' },
    { label: 'Interim HR leadership', value: 'interim-leadership' },
    { label: 'Recruitment process support', value: 'recruitment-support' },
    { label: 'HR tech/tools implementation', value: 'hr-tech' },
    { label: 'Training, coaching, or L&D', value: 'training' },
    { label: 'Other (please specify)', value: 'other' }
  ];
  selectedSupport: string[] = [];
  otherSupport: string = '';

  timelineOptions = ['Immediately', 'Within 1 month', '1-3 months', '3+ months'];
  timeline = this.timelineOptions[0];

  budgetOptions = ['< $5K', '$5K - $20K', '$20K - $50K', '$50K+'];
  budget = this.budgetOptions[0];

  toggleSupport(option: string) {
    const idx = this.selectedSupport.indexOf(option);
    if (idx > -1) {
      this.selectedSupport.splice(idx, 1);
    } else {
      this.selectedSupport.push(option);
    }
    if (option !== 'other') {
      this.otherSupport = '';
    }
  }

  
}
