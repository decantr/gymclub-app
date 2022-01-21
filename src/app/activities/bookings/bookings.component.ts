import { Component, OnInit } from '@angular/core';
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

  public bookings: Booking[] = [];
  public newBooking: Booking;
  public now: string;
  public min: string;
  public out: string ='';

  constructor(
    private userService: UserService,
    private bookingService: BookingService,
  ) { }

  ngOnInit() {
    this.now = this.bookingService.getOpen(new Date()).toISOString();
    this.min = new Date(this.now).toISOString();

    this.resetBooking();
  }

  public editBooking(event: Event, key: 'type'|'date_from'|'date_to', value?: string): void {
    console.log(value);
    if (event) {
      this.out = JSON.stringify(event);
    } else {
      if (key === 'date_from' || key === 'date_to' ) {
          const date = value === 'next' ? this.bookingService.getNext(this.newBooking) : new Date(value);
          this.newBooking.date_from = new Date(date);
          date.setHours(date.getHours() + 1);
          this.newBooking.date_to = date;
      } else {
        this.newBooking[key] = value;
      }
    }
  }

  public showBooking(booking: Booking) {
    alert('book');
  }

  public finishBooking() {
    this.bookings.push(this.newBooking);
    this.newBooking = {id: 1, user_id: this.userService.getId()};
    this.now = this.bookingService.getOpen(new Date()).toISOString();
  }

  public resetBooking() {
    this.newBooking = {id: 1, user_id: this.userService.getId()};
  }

  public exportEvent() {
    alert('TODO');
  }

  public getHumanDate(date: Date): string {
    return formatRelative(date, new Date());
  }
}
