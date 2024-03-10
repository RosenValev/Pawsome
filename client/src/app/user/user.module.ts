import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { BookingComponent } from './booking/booking.component';



@NgModule({
  declarations: [
    AuthComponent,
    ProfileComponent,
    BookingComponent
  ],
  imports: [
    CommonModule, RouterModule, UserRoutingModule
  ],
  exports: [AuthComponent, ProfileComponent]
})
export class UserModule { }
