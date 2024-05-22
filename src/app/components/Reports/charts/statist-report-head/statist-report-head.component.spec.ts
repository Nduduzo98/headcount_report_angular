import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistReportHeadComponent } from './statist-report-head.component';

describe('StatistReportHeadComponent', () => {
  let component: StatistReportHeadComponent;
  let fixture: ComponentFixture<StatistReportHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatistReportHeadComponent]
    });
    fixture = TestBed.createComponent(StatistReportHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
