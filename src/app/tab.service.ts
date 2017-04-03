import {Tab} from './Tab';
import { Injectable } from '@angular/core';

@Injectable()
export class TabService {
  public tabs: Tab[];

  constructor() {
    this.tabs = [new Tab('About'), new Tab('Posts')];
  }

}
