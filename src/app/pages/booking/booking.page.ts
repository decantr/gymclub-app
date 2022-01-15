import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  public type: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot);
  }

}
