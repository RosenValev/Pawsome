import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogPost } from 'src/app/types/blog-post';
import { UserService } from 'src/app/user/user.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-current-blog',
  templateUrl: './current-blog.component.html',
  styleUrls: ['./current-blog.component.css']
})
export class CurrentBlogComponent implements OnInit {

  blog = {} as BlogPost;
  isOwner: boolean = false;
  user: User | undefined;

  constructor(
    private activeRoute: ActivatedRoute,
    private blogService: BlogService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['blogId']

      this.blogService.getBlogPostById(id).subscribe((blog) => {
        this.blog = blog as BlogPost;
        this.user = this.userService.getUser();
        this.isOwner = this.user?._id === this.blog.owner._id
        debugger
      })
    });
  }
}
