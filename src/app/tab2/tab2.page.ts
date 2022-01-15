import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
	public openStatus: {icon: string, color: string, status: string}
  public user: User;

	constructor(
    private userService: UserService,
	) {
    this.user = this.userService.getActiveUser();
	}

	ngOnInit() {
		this.getOpenStatus();
	}

	private getOpenStatus() {
		const now = new Date();

		if (now.getDay() === 5 || now.getDay() === 6) {
			if (now.getHours() < 6 || now.getHours() > 20) {
				this.openStatus = {icon: 'close-circle-outline', color: 'red', status: 'closed'}
			} else if ( now.getHours() === 19) {
				this.openStatus = {icon: 'alert-circle-outline', color: 'orange', status: 'closes at 8pm'}
			} else {
				this.openStatus = {icon: 'checkmark-circle-outline', color: 'green', status: 'open until 8pm'}
			}
		} else {
			if (now.getHours() < 6 || now.getHours() > 22) {
				this.openStatus = {icon: 'close-circle-outline', color: 'red', status: 'closed'}
			} else if ( now.getHours() === 21) {
				this.openStatus = {icon: 'alert-circle-outline', color: 'orange', status: 'closes at 10pm'}
			} else {
				this.openStatus = {icon: 'checkmark-circle-outline', color: 'green', status: 'open until 10pm'}
			}
		}
	}

}
