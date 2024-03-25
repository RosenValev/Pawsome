import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { CreateBlogComponent } from "./create-blog/create-blog.component";
import { AuthGuard } from "../guards/auth.guard";
import { CurrentBlogComponent } from "./current-blog/current-blog.component";
import { EditBlogComponent } from "./edit-blog/edit-blog.component";

const routes: Routes = [
    {
        path: 'blog',
        children: [
            { path: '', pathMatch: 'full', component: MainComponent },
            { path: ':blogId', component: CurrentBlogComponent },
            { path: ':blogId/edit', component: EditBlogComponent },
        ]
    },
    { path: 'create-blog', component: CreateBlogComponent, canActivate: [AuthGuard] },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BlogRoutingModule { }
