import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { formatRelative } from 'date-fns';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {

  public bookings: Booking[] = [];

  constructor(
    private bookingService: BookingService,
  ) { }

  ngOnInit() {
    this.bookingService.getAll().then((bookings: Booking[]) => this.bookings = bookings);
  }

  public showBooking(booking: Booking) {
    alert('book');
  }

  public getHumanDate(date: Date): string {
    return formatRelative(date, new Date());
  }
}
