import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletBookingComponent } from './delet-booking.component';

describe('DeletBookingComponent', () => {
  let component: DeletBookingComponent;
  let fixture: ComponentFixture<DeletBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletBookingComponent]
    });
    fixture = TestBed.createComponent(DeletBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
