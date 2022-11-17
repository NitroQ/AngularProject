import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-living-room',
  templateUrl: './explore-living-room.component.html',
  styleUrls: ['./explore-living-room.component.scss'],
})
export class ExploreLivingRoomComponent implements OnInit {
  livingRoomDesigns: any = [
    {
      imgUrl: '../../../../assets/images/living-room-images/aussie-living-room-design.png',
      designName: 'Aussie Living Room',
      prodSize: "18' x 21'",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
