import { BlogPostService } from '../blog-post.service';
import { BlogPost } from '../BlogPost';
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
    this.posts = blogPostService.posts.sort(function (a, b) {
      const aDate = new Date(a.published);
      const bDate = new Date(b.published);
      return aDate > bDate ? -1 : aDate < bDate ? 1 : 0;
    });
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
