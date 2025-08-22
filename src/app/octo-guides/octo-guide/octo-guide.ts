import { Component } from '@angular/core';
import { OctoGuideCardComponent } from '../octo-guide-card/octo-guide-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-octo-guide',
  imports: [OctoGuideCardComponent],
  templateUrl: './octo-guide.html',
  styleUrl: './octo-guide.css',
})
export class OctoGuideComponent {

  constructor(private router: Router) { }

  title = 'Help Octo Find Your Best Fit';
  description = 'Make confident decisions faster — just follow a few guided steps.';
  steps = [
    { icon: 'assets/icons/Icon - Octo guide Slider.svg', text: 'Set preferences based on what you need.' },
    { icon: 'assets/icons/Icon - Octo guide Puzzle.svg', text: 'Let Octo refine your options to find the best fit.' },
    { icon: 'assets/icons/Icon - Octo guide Wavy Check.svg', text: 'Get recommendations that actually fit your goals.' }
  ];
  buttonText = 'Get Started';
  buttonColor = '#FD6E1D';
  closeIcon = 'assets/icons/Icon - Octo guide Close.svg';

  closeGuide = () => { this.router.navigate(['/']) };
  startGuide() {
    this.router.navigate(['/octo-guide-1']);
  }

}
