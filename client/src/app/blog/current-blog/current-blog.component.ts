import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogPost } from 'src/app/types/blog-post';

@Component({
  selector: 'app-current-blog',
  templateUrl: './current-blog.component.html',
  styleUrls: ['./current-blog.component.css']
})
export class CurrentBlogComponent implements OnInit {

  blog = {} as BlogPost;

  constructor(
    private activeRoute: ActivatedRoute,
    private blogService: BlogService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((data) => {
      const id = data['blogId']
      console.log(id)


      this.blogService.getBlogPostById(id).subscribe((blog) => {
        this.blog = blog as BlogPost;
      })
    });
  }
}
