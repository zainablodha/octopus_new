import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyOctopus } from './why-octopus';

describe('WhyOctopus', () => {
  let component: WhyOctopus;
  let fixture: ComponentFixture<WhyOctopus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyOctopus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyOctopus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
