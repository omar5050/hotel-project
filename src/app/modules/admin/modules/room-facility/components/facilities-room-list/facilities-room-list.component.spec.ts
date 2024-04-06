import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiesRoomListComponent } from './facilities-room-list.component';

describe('FacilitiesRoomListComponent', () => {
  let component: FacilitiesRoomListComponent;
  let fixture: ComponentFixture<FacilitiesRoomListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacilitiesRoomListComponent]
    });
    fixture = TestBed.createComponent(FacilitiesRoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
