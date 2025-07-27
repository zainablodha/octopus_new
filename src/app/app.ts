import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { HomeComponent } from './home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'octopus-app';
}