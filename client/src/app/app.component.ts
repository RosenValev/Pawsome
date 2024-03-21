import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Pawsome';
  declare token: string | null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.token = this.userService.getJwtToken();

    if (this.token) {
      this.userService.setIsAuthenticated(true);
    }
  }
}
