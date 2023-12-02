import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../shared/services/authentication/authentication.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    console.log("test");
  }

  async logout() {
    // await this.authService.logout();
  }

}
