import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private user: User;

  constructor() { 
    this.user = { 
      id: 2291101,
      name: 'Joe Bloggs',
      contact_number: '07884174038',
      dob: new Date('1989-02-19'),
      profilePicture: '../../../assets/avatar.png',
      email: 'joe.bloggs@example.com',
      address: {
        line_1: '23 Example Street',
        line_2: 'Aberdeen',
        postcode: 'AB11 5AY'
      },
    } as User;
  }

  public getActiveUser(): User {
    return this.user;
  }
}
