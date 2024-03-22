import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  constructor(
    private blogService: BlogService,
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.postNewBlogFromInitialize();
  }

  declare postNewBlogFrom: FormGroup;

  postNewBlogFromInitialize() {
    this.postNewBlogFrom = this.fb.group({
      title: ['', [Validators.required]],
      subTitle: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      text: ['', [Validators.required]],
    })
  }

  postFormHandler() {
    if (this.postNewBlogFrom.valid) {
      const token = this.userService.getJwtToken();
      console.log({ ...this.postNewBlogFrom?.value, token })


      // this.postNewBlogFrom.reset();
      // this.router.navigate(['/blog']);
    }
  }
}
