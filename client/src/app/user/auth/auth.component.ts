import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private userService: UserService) { }

  rightPanelActive: boolean = false;

  toggleRightPanel(): void {
    this.rightPanelActive = !this.rightPanelActive;
  }

  onRegisterHandler(ev: Event, username: string, email: string, password: string, repeatPassword: string) {
    ev.preventDefault();
    this.userService.onRegister(username, email, password, repeatPassword).subscribe(result => {
      console.log(result)
    })
  }

}
