import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreOctopus } from './explore-octopus';

describe('ExploreOctopus', () => {
  let component: ExploreOctopus;
  let fixture: ComponentFixture<ExploreOctopus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreOctopus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreOctopus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
