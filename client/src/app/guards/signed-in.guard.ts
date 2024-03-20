// import { Injectable } from "@angular/core";
// import { CanActivate, Router } from "@angular/router";

// @Injectable({
//   providedIn: 'root'
// })
// export class signedInGuard implements CanActivate {

//   constructor(private router: Router) {}

//   canActivate(): boolean {
//     const authToken = sessionStorage.getItem('auth');
//     if (authToken !== null) {
//         this.router.navigate(['/']); // Redirect to home if already signed in
//         return false;
//     } else {
//         return true; // Allow access to sign-in component
//     }
//   }
// }

import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const signedInGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const authToken = sessionStorage.getItem('auth');
  if (authToken != null) {
    router.navigateByUrl('/');
    return false
  } else {
    return true;
  }
}