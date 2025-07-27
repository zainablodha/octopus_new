import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoryCardComponent } from '../category-card/category-card';

@Component({
  selector: 'app-popular-categories',
  imports: [CommonModule, CategoryCardComponent],
  templateUrl: './popular-categories.html',
  styleUrl: './popular-categories.css'
})
export class PopularCategoriesComponent {

  categories = [
    {
      title: 'Employee Engagement',
      description: 'Pulse surveys, data mgmt, recognition, employee',
      viewMoreLink: '/employee-engagement',
      items: [
        { logo: 'assets/logos/vantage.svg', name: 'Vantage Circle', desc: 'AI-driven global platform for effortless HR employee engagement solutions.' },
        { logo: 'assets/logos/motivosity.svg', name: 'Motivosity', desc: 'Address key employee journey moments with our platform.' },
        { logo: 'assets/logos/jotform.svg', name: 'Jotform', desc: 'Trusted by 20M+, easily create online forms from any device.' },
        { logo: 'assets/logos/workvivo.svg', name: 'Workvivo', desc: 'Employee Experience Platform enhancing communication, inclusion, and engagement globally.' }
      ]
    },
    {
      title: 'Video Interviewing',
      description: 'Streamline hiring, pre-recorded & live assessments, ATS integration',
      viewMoreLink: '/video-interviewing',
      items: [
        { logo: 'assets/logos/glider.svg', name: 'Glider AI', desc: '2021 SIA winner. Skill tests, assessments, interviews for hiring.' },
        { logo: 'assets/logos/sparkhire.svg', name: 'Spark Hire', desc: 'Simple video interviews, 6,000+ customers, 100+ countries.' },
        { logo: 'assets/logos/hackerrank.svg', name: 'HackerRank Developer Skills Platform', desc: 'Evaluate developers using skill-based platform globally.' },
        { logo: 'assets/logos/canditech.svg', name: 'Canditech', desc: 'Assess tech and soft skills with job-simulation tests including Coding and SQL.' }
      ]
    },
    {
      title: 'Compensation Management',
      description: 'Pay planning, policy management, budgets',
      viewMoreLink: '/compensation-management',
      items: [
        { logo: 'assets/logos/salary.svg', name: 'Salary.com', desc: 'Adapt fast with Salary.com: Top compensation data, software, analytics.' },
        { logo: 'assets/logos/paycom.svg', name: 'Paycom', desc: 'For 25 years, Paycom (NYSE:PAYC) simplifies HR, payroll, empowers transparency.' },
        { logo: 'assets/logos/anaplan.svg', name: 'Anaplan', desc: 'Transform with Hyperblock™ tech—real-time insights, future forecasting.' },
        { logo: 'assets/logos/ceridian.svg', name: 'Ceridian Dayforce', desc: 'Global always-on people platform, HCM solution integrating payroll, HR, benefits, talent...' }
      ]
    }
  ];
}
