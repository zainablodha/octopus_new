import { Component, Input, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface GuideStep {
  icon: string;
  text: string;
}

@Component({
  selector: 'app-octo-guide-card',
  templateUrl: './octo-guide-card.html',
  styleUrls: ['./octo-guide-card.css'],
  standalone: true,
  imports: [CommonModule]
})
export class OctoGuideCardComponent {

  constructor(private router: Router) {}

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() steps: GuideStep[] = [];
  @Input() buttonText: string = 'Get Started';
  @Input() buttonColor: string = '#FD6E1D'; // Default orange
  @Input() closeIcon: string = 'assets/icons/Icon - Octo guide Close.svg';

  @Input() showClose: boolean = true;
  @Input() onAction: (() => void) | undefined;

  handleClose() {
     this.router.navigate(['/']) 
    };
  
  handleAction() {
    if (this.onAction) this.onAction();
  }
}