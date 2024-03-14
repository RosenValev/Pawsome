import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
    { path: 'blog', component: MainComponent },
    // { path: 'booking', component: BookingComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BlogRoutingModule {}
