import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshwaneWestComponent } from './tshwane-west.component';

describe('TshwaneWestComponent', () => {
  let component: TshwaneWestComponent;
  let fixture: ComponentFixture<TshwaneWestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TshwaneWestComponent]
    });
    fixture = TestBed.createComponent(TshwaneWestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
