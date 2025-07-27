import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


export interface CategoryCardItem {
  logo: string;
  name: string;
  desc: string;
}

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-card.html',
  styleUrl: './category-card.css'
})
export class CategoryCardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() viewMoreLink = '#';
  @Input() items: CategoryCardItem[] = [];
}
