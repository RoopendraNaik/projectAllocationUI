import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from './navbar.service'
import { NavItem } from './constants'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'projectAllocationUI';
  @ViewChild('appDrawer') appDrawer: ElementRef;
  constructor(private router: Router, public navbarService: NavbarService) { }
  navItems: NavItem[] = [
    {
      displayName: 'Home',
      iconName: 'home',
      route: 'home',
      children: [
        {
          displayName: 'Dashboard',
          iconName: 'dashboard',
          route: 'home/dashboard',
        },
        {
          displayName: 'Notifications',
          iconName: 'notifications',
          route: 'home/notifications'
        }
      ]
    },
    {
      displayName: 'Projects',
      iconName: 'folder_shared',
      route: 'projects'
    }
  ];
  ngAfterViewInit() {
    this.navbarService.appDrawer = this.appDrawer;
  }
}
