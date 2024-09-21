import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewBookingPageComponent } from './review-booking-page.component';

describe('ReviewBookingPageComponent', () => {
  let component: ReviewBookingPageComponent;
  let fixture: ComponentFixture<ReviewBookingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewBookingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewBookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
