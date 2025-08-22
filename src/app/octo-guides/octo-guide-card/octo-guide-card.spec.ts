import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctoGuideCard } from './octo-guide-card';

describe('OctoGuideCard', () => {
  let component: OctoGuideCard;
  let fixture: ComponentFixture<OctoGuideCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OctoGuideCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OctoGuideCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
