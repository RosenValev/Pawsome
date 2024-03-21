import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { CreateBlogComponent } from "./create-blog/create-blog.component";

const routes: Routes = [
    { path: 'blog', component: MainComponent },
    { path: 'create-blog', component: CreateBlogComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BlogRoutingModule { }
