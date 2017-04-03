declare var require: any;
import { BlogPost } from './BlogPost';

import { Injectable } from '@angular/core';

@Injectable()
export class BlogPostService {
  public posts: BlogPost[];

  constructor() {
    const vm = this;
    const postStubs: any[] = require('../posts/posts.json');

    let i = 0;
    vm.posts = postStubs.map(stub => {
      i++;
      return new BlogPost(stub, i);
    });
  }

  public getPost(id: number) {
    return this.posts.find(post => {
      return post.id === id;
    });
  }

}
