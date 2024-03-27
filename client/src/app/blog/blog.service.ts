import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  editBlogPost(id: string, payload: { title: string, subTitle: string, imageUrl: string, text: string, token: string }) {
    return this.http.put<BlogPostCreate>(`${this.API}/${id}/edit`, payload, {
      observe: 'response',
      responseType: 'json',
    })
  }

  getAllBlogPosts() {
    return this.http.get(this.API);
  }

  getLastThreeBlogPosts() {
    return this.http.get(`${this.API}/last-three`)
  }

  getPersonalBlogPosts(id: string) {
    return this.http.get(`${this.API}/${id}/own-posts`);
  }

  getBlogPostById(id: string) {
    return this.http.get(`${this.API}/${id}`);
  }

  deleteBlogPost(id: string) {
    return this.http.delete(`${this.API}/${id}/delete`);
  }

}
