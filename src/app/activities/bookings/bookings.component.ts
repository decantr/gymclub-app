import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/service/booking.service';
import { UserService } from 'src/app/services/user.service';
import { formatRelative } from 'date-fns';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {

  public booking: Booking;
  public now: string = new Date().toISOString().split('T')[0];
  public out: string ='';

  constructor(
    private router: Router,
    private userService: UserService,
    private bookingService: BookingService,
  ) { }

  ngOnInit() {
    this.booking = {id: 1, user_id: this.userService.getId()};
  }

  public editBooking(event: Event, key: 'type'|'date_from'|'date_to', value?: string): void {
    if (event) {
      this.out = JSON.stringify(event);
    } else {
      if (key === 'date_from' || key === 'date_to' ) {
        if (value === 'next') {
          const date = this.bookingService.getNext(this.booking)
          this.booking.date_from = date;
          date.setHours(date.getHours() + 1);
          this.booking.date_to = date;
        } else {
          this.booking[key] = new Date(value);
        }
      } else {
        this.booking[key] = value;
      }
    }
  }

  public resetBooking() {
    this.booking = {id: 1, user_id: this.userService.getId()};
  }

  public exportEvent() {
    alert('TODO');
  }

  public getHumanDate(date: Date): string {
    return formatRelative(date, new Date());
  }
}
