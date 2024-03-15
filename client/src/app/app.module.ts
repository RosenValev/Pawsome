import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';

import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogModule } from './blog/blog.module';
import { ResponseInterceptorProvider } from './user/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
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
