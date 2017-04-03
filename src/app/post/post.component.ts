import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { BlogPostService } from '../blog-post.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  private post: BlogPost;

  constructor(
  private route: ActivatedRoute,
  private router: Router,
  private service: BlogPostService
) {}

  ngOnInit() {
    this.route.params
    .subscribe(params => {
      this.post = this.service.getPost(+params['id']);
    });
  }

}
