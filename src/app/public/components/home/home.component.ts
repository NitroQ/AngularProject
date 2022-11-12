import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  toServices() {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  constructor() {}

  ngOnInit(): void {}
}
