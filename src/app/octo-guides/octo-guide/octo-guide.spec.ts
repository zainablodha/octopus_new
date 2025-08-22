import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctoGuideComponent } from './octo-guide';

describe('OctoGuide1', () => {
  let component: OctoGuideComponent;
  let fixture: ComponentFixture<OctoGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OctoGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OctoGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
