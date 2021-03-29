import { AuthenticationService } from './../../../utils/auth/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {}

  logout() {
    console.log("eddai mannaggia cristo..");
    this.authService.logout();
  }
}
