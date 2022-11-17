import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-space-saving',
  templateUrl: './explore-space-saving.component.html',
  styleUrls: ['./explore-space-saving.component.scss'],
})
export class ExploreSpaceSavingComponent implements OnInit {
  spaceSavingDesigns: any = [
    {
      imgUrl: '../../../../assets/images/space-saving-imaegs/all-in-one-room-design.png',
      designName: 'All in One Room',
      prodSize: "18' x 21'",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
