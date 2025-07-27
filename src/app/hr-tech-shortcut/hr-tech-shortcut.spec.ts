import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrTechShortcut } from './hr-tech-shortcut';

describe('HrTechShortcut', () => {
  let component: HrTechShortcut;
  let fixture: ComponentFixture<HrTechShortcut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrTechShortcut]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrTechShortcut);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
