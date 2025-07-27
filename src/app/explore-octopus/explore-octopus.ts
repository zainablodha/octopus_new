import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-explore-octopus',
  imports: [CommonModule],
  templateUrl: './explore-octopus.html',
  styleUrl: './explore-octopus.css'
})
export class ExploreOctopus {

  categories = [
    {
      title: 'Talent Management',
      items: [
        'HR Analytics Software',
        'HR Management Suites',
        'Career Management Software',
        'Employee Engagement Software',
        'Employee Grievance'
      ]
    },
    {
      title: 'HRMS / HCM',
      items: [
        'Core HR Softwares',
        'HR Information Systems (HRIS)',
        'Human Capital Mangement',
        'HR Management Systems (HRMS)'
      ]
    },
    {
      title: 'Recruitment',
      items: [
        'Staffing & Management Software',
        'Recruiting Software',
        'Pre-Employment Screening',
        'Background Checks',
        'Video Interviewing Software'
      ]
    },
    {
      title: 'Learning & Development',
      items: [
        'Training / E-Learning',
        'Corporate LMS',
        'Course Authoring',
        'Training Management System',
        'Learning Experience Systems'
      ]
    },
    {
      title: 'Total Rewards',
      items: [
        'Benefits Administration',
        'Corporate Wellness',
        'Compensation Management',
        'Employee Recognition',
        'Performance Management'
      ]
    },
    {
      title: 'Other Technology',
      items: [
        'Artificial Intelligence',
        'Blockchain',
        'Internet of Things',
        'Machine Learning HR',
        'VR & AR Software'
      ]
    }
  ];


}
