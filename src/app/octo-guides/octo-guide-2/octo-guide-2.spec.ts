import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctoGuide2 } from './octo-guide-2';

describe('OctoGuide2', () => {
  let component: OctoGuide2;
  let fixture: ComponentFixture<OctoGuide2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OctoGuide2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OctoGuide2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
