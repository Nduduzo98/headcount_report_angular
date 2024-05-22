import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshwaneNorthComponent } from './tshwane-north.component';

describe('TshwaneNorthComponent', () => {
  let component: TshwaneNorthComponent;
  let fixture: ComponentFixture<TshwaneNorthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TshwaneNorthComponent]
    });
    fixture = TestBed.createComponent(TshwaneNorthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
