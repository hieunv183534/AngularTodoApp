import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor() { }

  title = 'Angular1';
  page: string = 'Trang chủ';
  items: MenuItem[] = [];
  activeItem: MenuItem = {};
  pagePaths: string[] = [];

  ngOnInit(): void {
    this.items = [
      { label: 'Trang chủ', icon: 'pi pi-fw pi-home', routerLink: 'home', command: () => this.menuOnClick('Trang chủ') },
      { label: 'Todo App', icon: 'pi pi-fw pi-calendar', routerLink: 'action', command: () => this.menuOnClick('Quản lí công việc') },
    ];
    this.pagePaths = ['home', 'action'];
    this.activeItem = this.items[0];
  }

  menuOnClick(_page: string): void {
    this.page = _page;
  }
}
