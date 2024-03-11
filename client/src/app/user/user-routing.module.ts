import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { BookingComponent } from "./booking/booking.component";

const routes: Routes = [
    { path: 'sign-in', component: AuthComponent },
    { path: 'booking', component: BookingComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }