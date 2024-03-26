import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../types/blog-post';
import { BlogService } from '../blog/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogPosts: BlogPost[] | null = [];

  constructor(private blogService: BlogService) { };

  ngOnInit(): void {
    this.blogService.getLastThreeBlogPosts().subscribe((posts) => {
      this.blogPosts = posts as BlogPost[];
    })
  }

}
