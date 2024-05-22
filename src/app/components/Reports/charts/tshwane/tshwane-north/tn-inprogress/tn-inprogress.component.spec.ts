import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnInprogressComponent } from './tn-inprogress.component';

describe('TnInprogressComponent', () => {
  let component: TnInprogressComponent;
  let fixture: ComponentFixture<TnInprogressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TnInprogressComponent]
    });
    fixture = TestBed.createComponent(TnInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
