import { Component, OnInit, Inject } from '@angular/core';
import {Tab} from '.././Tab';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public tabs: Tab[];

  constructor(@Inject(TabService) private tabService: TabService) {
    this.tabs = tabService.tabs;
  }

  ngOnInit() {
  }

}
