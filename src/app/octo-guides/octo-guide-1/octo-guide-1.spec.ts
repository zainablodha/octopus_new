import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctoGuide1 } from './octo-guide-1';

describe('OctoGuide1', () => {
  let component: OctoGuide1;
  let fixture: ComponentFixture<OctoGuide1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OctoGuide1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OctoGuide1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
