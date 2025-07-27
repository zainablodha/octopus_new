import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './showcase.html',
  styleUrls: ['./showcase.css']
})
export class ShowcaseComponent {
  features = [
    {
      icon: 'assets/icons/Icon - Show More.svg',
      title: 'Upload Detailed Info',
      desc: 'Showcase your solution in a trusted for users. No extra design or production required.'
    },
    {
      icon: 'assets/icons/Icon - Search.svg',
      title: 'Intent Driven Exposure',
      desc: 'Get discovered by decision makers actively searching for solutions like yours.'
    },
    {
      icon: 'assets/icons/Icon - Tick (Stroke).svg',
      title: 'Insightful Analytics',
      desc: 'Understand who’s viewing your product, what they’re comparing it with, and why'
    },
    {
      icon: 'assets/icons/Icon - Happy.svg',
      title: 'Direct Connection',
      desc: 'Engage with interested buyers through built-in contact flows. No middleman, No noise.'
    }
  ];
}