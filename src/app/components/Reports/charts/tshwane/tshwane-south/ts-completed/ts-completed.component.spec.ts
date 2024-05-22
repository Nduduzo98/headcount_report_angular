import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsCompletedComponent } from './ts-completed.component';

describe('TsCompletedComponent', () => {
  let component: TsCompletedComponent;
  let fixture: ComponentFixture<TsCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TsCompletedComponent]
    });
    fixture = TestBed.createComponent(TsCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
