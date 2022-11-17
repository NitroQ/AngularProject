import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-bathroom',
  templateUrl: './explore-bathroom.component.html',
  styleUrls: ['./explore-bathroom.component.scss'],
})
export class ExploreBathroomComponent implements OnInit {
  bathroomDesigns: any = [
    {
      imgUrl: '../../../../assets/images/bathroom-images/dark-bathroom-design.png',
      designName: 'Dark Bathroom',
      prodSize: "18' x 21'",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
