import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogRoutingModule } from './blog-routing.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule, BlogRoutingModule
  ],
  exports: [MainComponent]
})
export class BlogModule { }
