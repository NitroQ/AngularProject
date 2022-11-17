import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-home-office',
  templateUrl: './explore-home-office.component.html',
  styleUrls: ['./explore-home-office.component.scss'],
})
export class ExploreHomeOfficeComponent implements OnInit {
  homeOfficeDesigns: any = [
    {
      imgUrl: '../../../../assets/images/home-office-images/multi-office-design.png',
      designName: 'Multi Office',
      prodSize: "18' x 21'",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
