import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AuthComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [AuthComponent, ProfileComponent]
})
export class UserModule { }
