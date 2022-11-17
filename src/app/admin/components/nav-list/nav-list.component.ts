import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {
  type !: any;
  show : boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.type = sessionStorage.getItem('usertype');

    if(this.type == 'admin'){
      this.show = true;
    }
  }

}
