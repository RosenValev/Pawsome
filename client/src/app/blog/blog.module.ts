import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogRoutingModule } from './blog-routing.module';
import { CreateBlogComponent } from './create-blog/create-blog.component';



@NgModule({
  declarations: [
    MainComponent,
    CreateBlogComponent
  ],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule, BlogRoutingModule
  ],
  exports: [MainComponent]
})
export class BlogModule { }
