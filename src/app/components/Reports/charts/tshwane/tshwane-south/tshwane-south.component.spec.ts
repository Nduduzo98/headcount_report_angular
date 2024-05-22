import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshwaneSouthComponent } from './tshwane-south.component';

describe('TshwaneSouthComponent', () => {
  let component: TshwaneSouthComponent;
  let fixture: ComponentFixture<TshwaneSouthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TshwaneSouthComponent]
    });
    fixture = TestBed.createComponent(TshwaneSouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
