import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  isAuthenticatedSubscription: Subscription | undefined;
  isNavOpen: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    // Subscribe to the isAuthenticated$ observable from the UserService
    this.isAuthenticatedSubscription =
      this.userService.isAuthenticated$.subscribe(
        (isAuthenticated: boolean) => {
          this.isAuthenticated = isAuthenticated;
        }
      );

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Close the navigation when navigation starts
        this.isNavOpen = false;
      }
    });
  }

  ngOnDestroy(): void {
    // Clean up the subscription to avoid memory leaks
    this.isAuthenticatedSubscription?.unsubscribe();
  }

  logoutHandler(): void {
    this.userService.logout().subscribe((result) => {
      console.log(result);
    });
    this.router.navigate(['/']);
  }

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

}
