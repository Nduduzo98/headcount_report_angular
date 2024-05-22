import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwCompletedComponent } from './tw-completed.component';

describe('TwCompletedComponent', () => {
  let component: TwCompletedComponent;
  let fixture: ComponentFixture<TwCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwCompletedComponent]
    });
    fixture = TestBed.createComponent(TwCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
