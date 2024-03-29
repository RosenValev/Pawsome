import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { UserService } from 'src/app/user/user.service';
import { trimNotEmptyValidator } from 'src/app/shared/trimInpuit';

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
    this.postNewBlogFormInitialize();
  }

  declare postNewBlogForm: FormGroup;

  postNewBlogFormInitialize() {
    this.postNewBlogForm = this.fb.group({
      title: ['', [Validators.required, trimNotEmptyValidator()]],
      subTitle: ['', [Validators.required, trimNotEmptyValidator()]],
      imageUrl: ['', [Validators.required, trimNotEmptyValidator()]],
      text: ['', [Validators.required, trimNotEmptyValidator()]],
    })
  }

  postFormHandler() {
    if (this.postNewBlogForm.valid) {
      const token = this.userService.getJwtToken();
      const payload = { ...this.postNewBlogForm?.value, token };
      this.blogService.createNewBlogPost(payload).subscribe(result => {
        console.log(result);
        this.postNewBlogForm.reset();
        this.router.navigate(['/blog']);
      });
    }
  }
}
