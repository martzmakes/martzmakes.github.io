declare var require: any;
import { BlogPost } from './BlogPost';

import { Injectable } from '@angular/core';

@Injectable()
export class BlogPostService {
  public posts: BlogPost[];

  constructor() {
    const vm = this;
    const postFiles = [
      '20170403-0'
    ];

    vm.posts = [];

    postFiles.forEach(post => {
      vm.posts.push(new BlogPost(require('../posts/' + post + '.json')));
    });
  }

}
