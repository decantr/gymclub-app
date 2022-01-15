import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor() { }

  public getNext(booking: Booking) {
    return this.getOpen(new Date());
  }

  /** TODO : expand and improve */
  public getOpen(date: Date): Date {
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    
    if (date.getDay() === 5 || date.getDay() === 6) {
      // weekend
      if (date.getHours() < 19 && date.getHours() > 6) {
        date.setHours(date.getHours() + 1);
        return date;
      }
    } else {
      // weekday
      if (date.getHours() < 21 && date.getHours() > 6) {
        date.setHours(date.getHours() + 1);
        return date;
      }
    }

    date.setDate(date.getDate() + 1)
    date.setHours(6);
    return date;
  }
}
