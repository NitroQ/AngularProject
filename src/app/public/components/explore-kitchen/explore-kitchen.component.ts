import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-kitchen',
  templateUrl: './explore-kitchen.component.html',
  styleUrls: ['./explore-kitchen.component.scss'],
})
export class ExploreKitchenComponent implements OnInit {
  kitchenDesigns: any = [
    {
      imgUrl: '../../../../assets/images/kitchen-images/wooden-clean-kitchen-design.png',
      designName: 'Wooden Clean Kitchen',
      prodSize: "18' x 21'",
    },
    {
      imgUrl: '../../../../assets/images/kitchen-images/wooden-clean-kitchen-design.png',
      designName: 'Wooden Clean Kitchen',
      prodSize: "18' x 21'",
    },
    {
      imgUrl: '../../../../assets/images/kitchen-images/wooden-clean-kitchen-design.png',
      designName: 'Wooden Clean Kitchen',
      prodSize: "18' x 21'",
    },
    {
      imgUrl: '../../../../assets/images/kitchen-images/wooden-clean-kitchen-design.png',
      designName: 'Wooden Clean Kitchen',
      prodSize: "18' x 21'",
    },
    {
      imgUrl: '../../../../assets/images/kitchen-images/wooden-clean-kitchen-design.png',
      designName: 'Wooden Clean Kitchen',
      prodSize: "18' x 21'",
    },
    {
      imgUrl: '../../../../assets/images/kitchen-images/wooden-clean-kitchen-design.png',
      designName: 'Wooden Clean Kitchen',
      prodSize: "18' x 21'",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
