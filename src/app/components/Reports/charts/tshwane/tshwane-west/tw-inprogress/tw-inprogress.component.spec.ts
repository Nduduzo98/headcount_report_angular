import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwInprogressComponent } from './tw-inprogress.component';

describe('TwInprogressComponent', () => {
  let component: TwInprogressComponent;
  let fixture: ComponentFixture<TwInprogressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwInprogressComponent]
    });
    fixture = TestBed.createComponent(TwInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
