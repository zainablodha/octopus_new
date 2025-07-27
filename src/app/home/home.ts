import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HrTechShortcut } from '../hr-tech-shortcut/hr-tech-shortcut';
import { ExploreOctopus } from '../explore-octopus/explore-octopus';
import { ShowcaseComponent } from '../showcase/showcase';
import { WhyOctopusComponent } from '../why-octopus/why-octopus';
import { PopularCategoriesComponent } from '../popular-categories/popular-categories';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HrTechShortcut, ExploreOctopus, ShowcaseComponent, WhyOctopusComponent, PopularCategoriesComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

  categories = [
    'Core HR Software',
    'Recruitment',
    'Employee Engagement',
    'HR Analytics',
    'Corporate LMS',
    'Time Tracking'
  ];
  text = 'WHY LIST YOUR PRODUCT / SERVICE?';

}
