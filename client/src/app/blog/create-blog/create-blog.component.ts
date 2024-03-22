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

  declare postNewBlogForm: FormGroup;

  postNewBlogFromInitialize() {
    this.postNewBlogForm = this.fb.group({
      title: ['', [Validators.required]],
      subTitle: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      text: ['', [Validators.required]],
    })
  }

  postFormHandler() {
    if (this.postNewBlogForm.valid) {
      const token = this.userService.getJwtToken();
      const payload = { ...this.postNewBlogForm?.value, token };
      console.log(payload);

      // this.blogService.createNewBlogPost(payload).subscribe(result => {
      //   console.log(result)
      // });
      // this.postNewBlogFrom.reset();
      // this.router.navigate(['/blog']);
    }
  }
}
