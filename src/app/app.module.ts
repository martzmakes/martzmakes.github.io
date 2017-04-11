import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { MarkdownModule } from 'angular2-markdown';

import '@webcomponents/custom-elements/custom-elements.min.js';
// import 'clarity-icons/clarity-icons.min.js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PostsComponent } from './posts/posts.component';
import { PostsSidebarComponent } from './posts/posts-sidebar/posts-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PostsComponent,
    PostsSidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ClarityModule.forRoot(),
    MarkdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
