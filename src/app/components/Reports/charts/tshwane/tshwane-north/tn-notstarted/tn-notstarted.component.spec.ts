import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TnNotstartedComponent } from './tn-notstarted.component';

describe('TnNotstartedComponent', () => {
  let component: TnNotstartedComponent;
  let fixture: ComponentFixture<TnNotstartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TnNotstartedComponent]
    });
    fixture = TestBed.createComponent(TnNotstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
