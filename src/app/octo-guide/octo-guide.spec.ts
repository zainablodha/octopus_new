import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctoGuide } from './octo-guide';

describe('OctoGuide', () => {
  let component: OctoGuide;
  let fixture: ComponentFixture<OctoGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OctoGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OctoGuide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
