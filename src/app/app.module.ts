import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BlogComponent} from './components/blog/blog.component';
import {BlogItemComponent} from './components/blog-item/blog-item.component';
import {BlogItemTextComponent} from './components/blog-item-text/blog-item-text.component';
import {BlogItemImageComponent} from './components/blog-item-image/blog-item-image.component';
import {BlogItemDetailsComponent} from './components/blog-item-details/blog-item-details.component';
import {DataService} from "./services/data.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SummaryPipe} from './pipes/summary.pipe';
import {SearchBarComponent} from './shared/search-bar/search-bar.component';
import {BlogHomeComponent} from './components/blog-home/blog-home.component';
import {TextFormatDirective} from './directives/text-format.directive';
import {FilterTextPipe} from './pipes/filter-text.pipe';
import {HomeComponent} from './components/home/home.component';
import {AuthService} from "./services/auth.service";
import {AuthInterceptor} from './services/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogItemDetailsComponent,
    SummaryPipe,
    SearchBarComponent,
    BlogHomeComponent,
    TextFormatDirective,
    FilterTextPipe,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
