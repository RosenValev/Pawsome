import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const signedInGuard: CanActivateFn = () => {
    const router = inject(Router)
    const authToken = sessionStorage.getItem('auth');
    if (authToken != null) {
        router.navigate(['/']);
        return false;
    } else {
        return true;
    }
}