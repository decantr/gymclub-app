import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public user: User;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.user = this.userService.getActiveUser();
  }

}
