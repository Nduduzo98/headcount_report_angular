import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralStatistReportComponent } from './central-statist-report.component';

describe('CentralStatistReportComponent', () => {
  let component: CentralStatistReportComponent;
  let fixture: ComponentFixture<CentralStatistReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentralStatistReportComponent]
    });
    fixture = TestBed.createComponent(CentralStatistReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
