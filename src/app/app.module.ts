import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import 'hammerjs';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BlogPostService } from './blog-post.service';
import { TabService } from './tab.service';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidenavComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    TabService,
    BlogPostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
