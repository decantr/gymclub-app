import { Injectable } from '@angular/core';
import { AppDB } from 'src/db';
import { Booking } from '../models/booking';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private db: AppDB;

  constructor(
    private databaseService: DatabaseService,
  ) {
    this.db = this.databaseService.db;
  }

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

  public async getAll(): Promise<Booking[]> {
    return await this.db.bookings.toArray();
  }
  
  public async addNew(booking: Booking) {
    return await this.db.bookings.add(booking);
  }
}
