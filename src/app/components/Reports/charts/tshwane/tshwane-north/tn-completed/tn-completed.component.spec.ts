import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnCompletedComponent } from './tn-completed.component';

describe('TnCompletedComponent', () => {
  let component: TnCompletedComponent;
  let fixture: ComponentFixture<TnCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TnCompletedComponent]
    });
    fixture = TestBed.createComponent(TnCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
