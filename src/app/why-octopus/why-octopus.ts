import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-octopus',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './why-octopus.html',
  styleUrl: './why-octopus.css'
})
export class WhyOctopusComponent {
    features = [
    {
      icon: 'assets/icons/Icon - Search.svg',
      title: 'AI Powered Search',
      desc: 'Find tools that match your exact needs in minutes—not weeks.'
    },
    {
      icon: 'assets/icons/Icon - Show More.svg',
      title: 'Standardized Demos',
      desc: 'Compare solutions side-by-side with consistent, unbiased walkthroughs.'
    },
    {
      icon: 'assets/icons/Icon - Tick (Stroke).svg',
      title: 'Human Verified Listings',
      desc: 'Navigate a curated human verified catalogue across 50+ HR categories.'
    },
    {
      icon: 'assets/icons/Icon - Happy.svg',
      title: 'Built for HR Leaders',
      desc: 'Designed to support strategic priorities, and to leave out all the noise that usually distracts.'
    }
  ];

}
