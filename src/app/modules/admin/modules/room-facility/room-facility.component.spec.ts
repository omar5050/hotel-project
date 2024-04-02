import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomFacilityComponent } from './room-facility.component';

describe('RoomFacilityComponent', () => {
  let component: RoomFacilityComponent;
  let fixture: ComponentFixture<RoomFacilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomFacilityComponent]
    });
    fixture = TestBed.createComponent(RoomFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
