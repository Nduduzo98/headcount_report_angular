import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsInprogressComponent } from './ts-inprogress.component';

describe('TsInprogressComponent', () => {
  let component: TsInprogressComponent;
  let fixture: ComponentFixture<TsInprogressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TsInprogressComponent]
    });
    fixture = TestBed.createComponent(TsInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
