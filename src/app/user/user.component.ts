import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  title = 'Nibs-Knobs';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private router: Router) {}
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 991.8px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'push';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      if (this.sidenav.mode === 'push') {
        this.sidenav.close();
      }
    });
  }
  list = [
    {
      number: '1',
      name: 'Home',
      icon: 'fa-solid fa-house',
      routerLink: '/home',
    },
    {
      number: '2',
      name: 'Explore',
      icon: 'fa-solid fa-compass',
      routerLink: '/explore',
    },
    {
      number: '3',
      name: 'Consult',
      icon: 'fa-solid fa-calendar',
      routerLink: '/consult',
    },
    {
      number: '4',
      name: 'Contact',
      icon: 'fa-solid fa-circle-question',
      routerLink: '/contact',
    },
  ];
}
