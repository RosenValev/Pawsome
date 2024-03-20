import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  isAuthenticatedSubscription: Subscription | undefined;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    // Subscribe to the isAuthenticated$ observable from the UserService
    this.isAuthenticatedSubscription = this.userService.isAuthenticated$.subscribe(
      (isAuthenticated: boolean) => {
        debugger
        this.isAuthenticated = isAuthenticated;
      }
    );
  }

  ngOnDestroy(): void {
    // Clean up the subscription to avoid memory leaks
    this.isAuthenticatedSubscription?.unsubscribe();
  }


  logoutHandler(): void {
    this.userService.logout().subscribe(result => {
      console.log(result)
    });
    this.router.navigate(['/']);
  }
}
