import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface GuideStep {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-octo-guide',
  templateUrl: './octo-guide.html',
  styleUrls: ['./octo-guide.css'],
  standalone: true,
  imports: [CommonModule]
})
export class OctoGuideComponent implements OnInit {
  title = 'Help Octo Find Your Best Fit';
  description = 'Make confident decisions faster — just follow a few guided steps.';
  steps: GuideStep[] = [];
  buttonText = 'Get Started';

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.title = 'Help Octo Find Your Best Fit';
      this.description = 'Make confident decisions faster — just follow a few guided steps.';
      this.steps = [
        { icon: 'assets/icons/Icon - Octo guide Slider.svg', text: 'Set preferences based on what you need.' },
        { icon: 'assets/icons/Icon - Octo guide Puzzle.svg', text: 'Let Octo refine your options to find the best fit.' },
        { icon: 'assets/icons/Icon - Octo guide Wavy Check.svg', text: 'Get recommendations that actually fit your goals.' }
      ];
      this.buttonText = 'Get Started';
    }, 200); // Replace with API
  }

  closeGuide() {
    this.router.navigate(['/']);
  }
}