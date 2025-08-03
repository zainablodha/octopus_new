import { Routes } from '@angular/router';
import { OctoGuideComponent } from './octo-guide/octo-guide';
import { HomeComponent } from './home/home';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'octo-guide', component: OctoGuideComponent },
  { path: '**', redirectTo: '' }
];
