import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const authToken = sessionStorage.getItem('auth');
    if (authToken != null) {
        return true;
    } else {
        this.router.navigate(['/sign-in']);
        return false;
    }
  }
}

