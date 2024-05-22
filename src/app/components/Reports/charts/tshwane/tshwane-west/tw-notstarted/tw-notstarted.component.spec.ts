import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwNotstartedComponent } from './tw-notstarted.component';

describe('TwNotstartedComponent', () => {
  let component: TwNotstartedComponent;
  let fixture: ComponentFixture<TwNotstartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwNotstartedComponent]
    });
    fixture = TestBed.createComponent(TwNotstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
