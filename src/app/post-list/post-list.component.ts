import {BlogPostService} from '../blog-post.service';
import {BlogPost} from '../BlogPost';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public posts: BlogPost[];

  constructor(private blogPostService: BlogPostService, private router: Router) {
    this.posts = blogPostService.posts;
  }

  ngOnInit() {
  }

  public onSelect(post: BlogPost) {
    this.router.navigate(['/posts', post.id]);
  }

  public postSelected(post: BlogPost) {
    return this.router.url === '/posts/' + post.id;
  }

}
