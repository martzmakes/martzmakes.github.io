import {BlogPostService} from '../blog-post.service';
import {BlogPost} from '../BlogPost';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public posts: BlogPost[];

  constructor(@Inject(BlogPostService) private blogPostService: BlogPostService) {
    this.posts = blogPostService.posts;
  }

  ngOnInit() {
  }

}
