import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogPost } from 'src/app/types/blog-post';
import { UserService } from 'src/app/user/user.service';
import { User } from 'src/app/types/user';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-current-blog',
  templateUrl: './current-blog.component.html',
  styleUrls: ['./current-blog.component.css']
})
export class CurrentBlogComponent implements OnInit {

  blog = {} as BlogPost;
  isOwner: boolean = false;
  user: User | undefined;
  author: string | undefined;
  showDeleteModal: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private blogService: BlogService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['blogId']

      this.blogService.getBlogPostById(id).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404 || 500) {
            this.router.navigate(['/404']);
          }
          return throwError(error);
        })
      ).subscribe((blog) => {
        this.blog = blog as BlogPost;
        this.user = this.userService.getUser();
        this.isOwner = this.user?._id === this.blog.owner._id;
        this.author = this.blog.owner.username;
      })
    });
  }

  openDeleteModal(): void {
    this.showDeleteModal = true;
  }

  cancelDelete() {
    this.showDeleteModal = false;
  }

  deleteRecord() {
    this.blogService.deleteBlogPost(this.blog._id).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/blog']);
      this.showDeleteModal = false;
    })
  }
}
