import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletAdsComponent } from './delet-ads.component';

describe('DeletAdsComponent', () => {
  let component: DeletAdsComponent;
  let fixture: ComponentFixture<DeletAdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletAdsComponent]
    });
    fixture = TestBed.createComponent(DeletAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
