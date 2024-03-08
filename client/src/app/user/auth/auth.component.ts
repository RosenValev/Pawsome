import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  rightPanelActive: boolean = false;

  toggleRightPanel(): void {
    this.rightPanelActive = !this.rightPanelActive;
  }

}
