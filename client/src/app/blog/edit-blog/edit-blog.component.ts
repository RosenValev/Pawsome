import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogPost } from 'src/app/types/blog-post';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';
import { trimNotEmptyValidator } from 'src/app/shared/trimInpuit';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  id!: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private blogService: BlogService,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  form = this.fb.group({
    title: ['', [Validators.required, trimNotEmptyValidator()]],
    subTitle: ['', [Validators.required, trimNotEmptyValidator()]],
    imageUrl: ['', [Validators.required, trimNotEmptyValidator()]],
    text: ['', [Validators.required, trimNotEmptyValidator()]],
  })

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      this.id = data['blogId'];
      this.blogService.getBlogPostById(this.id).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404 || 500) {
            this.router.navigate(['/404']);
          }
          return throwError(error);
        })
      ).subscribe((blog) => {
        const { title, subTitle, imageUrl, text } = blog as BlogPost;
        this.form.setValue({ title, subTitle, imageUrl, text });
      })
    });
  }

  editFormHandler() {
    if (this.form.valid) {
      const token = this.userService.getJwtToken();
      const payload = { ...this.form?.value, token };
      this.blogService.editBlogPost(this.id, payload as any).subscribe((data) => {
        console.log(data);
        this.router.navigate([`/blog/${this.id}`]);
      })
    }
  }


}
