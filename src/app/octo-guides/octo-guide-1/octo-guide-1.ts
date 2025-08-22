import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OctoGuideCardComponent } from '../octo-guide-card/octo-guide-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-octo-guide-1',
  imports: [CommonModule, OctoGuideCardComponent],
  templateUrl: './octo-guide-1.html',
  styleUrl: './octo-guide-1.css',
  standalone: true
})
export class OctoGuide1Component {

   constructor(private router: Router) {}

  step = 1;
  totalSteps = 4;
  question = 'Which of the following best describes you?';
  selectedValue: string | null = null;
  options = [
    {
      icon: 'assets/icons/Icon - Octo-guide1 1.svg',
      title: 'HR leader in a growing company',
      description: 'Leading talent acquisition and employee engagement',
      value: 'hr-leader'
    },

    {
      icon: 'assets/icons/Icon - Octo-guide1 2.svg',
      title: 'Internal HRBP or specialist',
      description: 'Managing recruitment and HR operations',
      value: 'hrbp-specialist'
    },

    {
      icon: 'assets/icons/Icon - Octo-guide1 3.svg',
      title: 'Talent acquisition/People Ops',
      description: 'Focused on finding and hiring top talent',
      value: 'talent-acquisition'
    },

    {
      icon: 'assets/icons/Icon - Octo-guide1 4.svg',
      title: 'Consultant / HR service provider',
      description: 'Providing HR services to multiple organizations',
      value: 'hr-service-provider'
    },

    {
      icon: 'assets/icons/Icon - Octo-guide1 5.svg',
      title: 'Just exploring',
      description: 'Learning about Octopus capabilities',
      value: 'just-exploring'
    },
  ];

  closeGuide() {
    this.router.navigate(['/']);
  }

  handleNext() {
    this.router.navigate(['/octo-guide-2']);
  }

}
