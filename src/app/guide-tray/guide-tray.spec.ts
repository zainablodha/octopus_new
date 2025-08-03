import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideTray } from './guide-tray';

describe('GuideTray', () => {
  let component: GuideTray;
  let fixture: ComponentFixture<GuideTray>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuideTray]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuideTray);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
