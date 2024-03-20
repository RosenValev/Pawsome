import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = () => {
    const router = inject(Router)
    const authToken = sessionStorage.getItem('auth');
    if (authToken != null) {
        return true
    } else {
        router.navigate(['/sign-in']);
        return false;
    }
}
