import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { BookingComponent } from "./booking/booking.component";
import { ProfileComponent } from "./profile/profile.component";
import { authGuard } from "../guards/auth.guard";
import { signedInGuard } from "../guards/signed-in.guard";

const routes: Routes = [
    { path: 'booking', component: BookingComponent, canActivate: [authGuard] },
    { path: 'my-profile', component: ProfileComponent, canActivate: [authGuard] },
    { path: 'sign-in', component: AuthComponent, canActivate: [signedInGuard] },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }