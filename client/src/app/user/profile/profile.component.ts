import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog/blog.service';
import { BlogPost } from 'src/app/types/blog-post';
import { User } from 'src/app/types/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  blogPosts: BlogPost[] | null = [];
  user!: User

  constructor(private blogService: BlogService, private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.blogService.getPersonalBlogPosts(this.user?._id).subscribe((posts) => {
      this.blogPosts = posts as BlogPost[];
      console.log(this.blogPosts)
    })
  }
}
