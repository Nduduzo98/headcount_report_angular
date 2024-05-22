import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsSubmissionStatComponent } from './ts-submission-stat.component';

describe('TsSubmissionStatComponent', () => {
  let component: TsSubmissionStatComponent;
  let fixture: ComponentFixture<TsSubmissionStatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TsSubmissionStatComponent]
    });
    fixture = TestBed.createComponent(TsSubmissionStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
