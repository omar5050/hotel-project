import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRoomDetailsComponent } from './view-room-details.component';

describe('ViewRoomDetailsComponent', () => {
  let component: ViewRoomDetailsComponent;
  let fixture: ComponentFixture<ViewRoomDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRoomDetailsComponent]
    });
    fixture = TestBed.createComponent(ViewRoomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
