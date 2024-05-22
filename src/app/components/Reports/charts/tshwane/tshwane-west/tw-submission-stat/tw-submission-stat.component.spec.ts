import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwSubmissionStatComponent } from './tw-submission-stat.component';

describe('TwSubmissionStatComponent', () => {
  let component: TwSubmissionStatComponent;
  let fixture: ComponentFixture<TwSubmissionStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwSubmissionStatComponent]
    });
    fixture = TestBed.createComponent(TwSubmissionStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
