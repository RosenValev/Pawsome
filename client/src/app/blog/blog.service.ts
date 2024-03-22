import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogPost } from '../types/blog-post';
import { BlogPostCreate } from '../types/blog-create';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  private API = 'http://localhost:3000/blog'

  createNewBlogPost(payload: { title: string, subTitle: string, imageUrl: string, text: string, token: string }) {
    return this.http.post<BlogPostCreate>(`${this.API}/create`, payload, {
      observe: 'response',
      responseType: 'json',
    })
  }


}
