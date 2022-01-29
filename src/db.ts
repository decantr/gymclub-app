import Dexie, { Table } from 'dexie';
import { Booking } from './app/models/booking';

export class AppDB extends Dexie {
  bookings: Table<Booking, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(1).stores({
      bookings: '++id',
    });
  }
}

export const db = new AppDB();