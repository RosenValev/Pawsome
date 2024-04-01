import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';

import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './page-not-found/error.component';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogModule } from './blog/blog.module';
import { ResponseInterceptorProvider } from './user/auth.interceptor';
import { PageServicesComponent } from './page-services/page-services.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    PageServicesComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    UserModule,
    BlogModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [ResponseInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
