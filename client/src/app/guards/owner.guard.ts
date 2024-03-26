import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../user/user.service";
import { User } from "../types/user";
import { BlogService } from "../blog/blog.service";
import { Observable, catchError, switchMap } from "rxjs";
import { BlogPost } from "../types/blog-post";

@Injectable({
    providedIn: 'root'
})
export class OwnerGuard implements CanActivate {

    constructor(
        private router: Router,
        private userService: UserService,
        private blogService: BlogService) { }

    blog: BlogPost = {
        _id: "",
        title: "",
        subTitle: "",
        imageUrl: "",
        text: "",
        likes: [],
        commentList: [],
        owner: {
            _id: "",
            username: "",
            email: "",
            createdAt: "",
            updatedAt: "",
            token: ""
        },
        createdAt: "",
        updatedAt: ""
    }
    isOwner: boolean = false;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        const currentUser: User = this.userService.getUser();
        const blogId = route.params['blogId'];
        return this.blogService.getBlogPostById(blogId).subscribe((blog) => {
            this.blog = blog as BlogPost
            this.isOwner = currentUser._id === this.blog.owner._id
            debugger
            if (currentUser._id && this.blog.owner._id && this.isOwner) {
                return true;
            } else {
                this.router.navigate(['/blog']);
                return false
            }
        });
    }
}
