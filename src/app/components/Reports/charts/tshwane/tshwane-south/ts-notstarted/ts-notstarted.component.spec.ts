import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsNotstartedComponent } from './ts-notstarted.component';

describe('TsNotstartedComponent', () => {
  let component: TsNotstartedComponent;
  let fixture: ComponentFixture<TsNotstartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TsNotstartedComponent]
    });
    fixture = TestBed.createComponent(TsNotstartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
