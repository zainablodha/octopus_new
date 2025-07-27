import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.html',
})
export class CardComponent {
  @Input() imgSrc = '';
  @Input() alt = '';
  @Input() title = '';
  @Input() description = '';
}