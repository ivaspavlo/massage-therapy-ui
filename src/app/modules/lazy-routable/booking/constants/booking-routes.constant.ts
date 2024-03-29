import { Routes } from '@angular/router';
import { BookingComponent } from '../pages/container/booking.component';
import { GiftsComponent } from '../pages/gifts/gifts.component';
import { ReservationComponent } from '../pages/reservation/reservation.component';


export enum BOOKING_ROUTE_NAMES {
  BLANK = '',
  RESERVATION = 'reservation',
  APPOINTMENT = 'reservation/:id',
  GIFTS = 'gifts'
}

export const BOOKING_ROUTES: Routes = [
  {
    path: BOOKING_ROUTE_NAMES.BLANK,
    component: BookingComponent,
    children: [
      {
        path: BOOKING_ROUTE_NAMES.RESERVATION,
        component: ReservationComponent
      }, {
        path: BOOKING_ROUTE_NAMES.GIFTS,
        component: GiftsComponent
      }, {
        path: BOOKING_ROUTE_NAMES.BLANK,
        pathMatch: 'full',
        redirectTo: BOOKING_ROUTE_NAMES.RESERVATION
      }
    ]
  }
];
