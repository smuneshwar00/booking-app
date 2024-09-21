import { Routes } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListingPageComponent } from './pages/listing-page/listing-page.component';
import { PassengerInfoPageComponent } from './pages/passenger-info-page/passenger-info-page.component';
import { ReviewBookingPageComponent } from './pages/review-booking-page/review-booking-page.component';
import { BookingPageComponent } from './pages/booking-page/booking-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

export const routes: Routes = [
    {
        path: '',
        component: SearchPageComponent,
      },
      {
        path: 'listing/:search',
        component: ListingPageComponent,
      },
      {
        path: 'passenger',
        component: PassengerInfoPageComponent,
      },
      {
        path: 'review-booking',
        component: ReviewBookingPageComponent,
      },
      {
        path: 'booking',
        component: BookingPageComponent,
      },
      {
        path: '**',
        component: ErrorPageComponent,
      },
];
