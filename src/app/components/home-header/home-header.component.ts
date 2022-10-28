import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  toAbout() {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  toCulture() {
    document.querySelector('#culture')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  toServices() {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
