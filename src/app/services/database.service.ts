import { Injectable } from '@angular/core';
import { AppDB } from 'src/db';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db;

  constructor() { 
    this.db = new AppDB;
  }
}
