import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnSubmissionStatComponent } from './tn-submission-stat.component';

describe('TnSubmissionStatComponent', () => {
  let component: TnSubmissionStatComponent;
  let fixture: ComponentFixture<TnSubmissionStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TnSubmissionStatComponent]
    });
    fixture = TestBed.createComponent(TnSubmissionStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
