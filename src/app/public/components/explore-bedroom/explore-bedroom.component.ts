import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-bedroom',
  templateUrl: './explore-bedroom.component.html',
  styleUrls: ['./explore-bedroom.component.scss'],
})
export class ExploreBedroomComponent implements OnInit {
  bedroomDesigns: any = [
    {
      imgUrl: '../../../../assets/images/bedroom-images/faux-fur-bedroom-design.png',
      designName: 'Faux Fur Bedroom',
      prodSize: "18' x 21'",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
