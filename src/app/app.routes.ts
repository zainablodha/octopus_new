import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { OctoGuideComponent } from './octo-guides/octo-guide/octo-guide';
import { OctoGuide1Component } from './octo-guides/octo-guide-1/octo-guide-1';
import { OctoGuide2Component } from './octo-guides/octo-guide-2/octo-guide-2';
import { OctoGuide3Component } from './octo-guides/octo-guide-3/octo-guide-3';
import { OctoGuide4Component } from './octo-guides/octo-guide-4/octo-guide-4';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'octo-guide', component: OctoGuideComponent },
  { path: 'octo-guide-1', component: OctoGuide1Component },
  { path: 'octo-guide-2', component: OctoGuide2Component },
  { path: 'octo-guide-3', component: OctoGuide3Component },
  { path: 'octo-guide-4', component: OctoGuide4Component },
  { path: '**', redirectTo: '' }
];
