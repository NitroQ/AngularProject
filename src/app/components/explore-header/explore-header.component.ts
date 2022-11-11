import { Component, OnInit } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { ExplorekitchenComponent } from 'src/app/pages/explorekitchen/explorekitchen.component';

@Component({
  selector: 'app-explore-header',
  templateUrl: './explore-header.component.html',
  styleUrls: ['./explore-header.component.scss']
})
export class ExploreHeaderComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

}
