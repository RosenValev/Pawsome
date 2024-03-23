import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/types/blog-post';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  blogPosts: BlogPost[] | null = [];

  constructor(private blogService: BlogService) { };

  ngOnInit(): void {
    this.blogService.getAllBlogPosts().subscribe((posts) => {
      this.blogPosts = posts as BlogPost[];
    })
  }

}