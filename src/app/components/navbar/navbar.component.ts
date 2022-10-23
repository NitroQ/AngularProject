import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  list = [
    {
      number: '1',
      name: 'Home',
      icon: 'fa-solid fa-house',
    },
    {
      number: '2',
      name: 'Explore',
      icon: 'fa-solid fa-compass',
    },
    {
      number: '3',
      name: 'Consult',
      icon: 'fa-solid fa-calendar',
    },
    {
      number: '4',
      name: 'Contact',
      icon: 'fa-solid fa-circle-question',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
