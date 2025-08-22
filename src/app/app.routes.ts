import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { OctoGuideComponent } from './octo-guides/octo-guide/octo-guide';
import { OctoGuide1Component } from './octo-guides/octo-guide-1/octo-guide-1';
import { OctoGuide2Component } from './octo-guides/octo-guide-2/octo-guide-2';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'octo-guide', component: OctoGuideComponent },
  { path: 'octo-guide-1', component: OctoGuide1Component },
  { path: 'octo-guide-2', component: OctoGuide2Component },
  { path: '**', redirectTo: '' }
];
