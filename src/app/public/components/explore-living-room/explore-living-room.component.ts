import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';


@Component({
  selector: 'app-explore-living-room',
  templateUrl: './explore-living-room.component.html',
  styleUrls: ['./explore-living-room.component.scss'],
})
export class ExploreLivingRoomComponent implements OnInit {
  livingRoomDesigns: any = [ ];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getImage();
  }

  getImage(){
    this.api.getImage()
    .subscribe(res=>{
      for (let i = 0; i < res.length; i++) {
         if(res[i].category == "livingroom"){
          this.livingRoomDesigns.push(res[i]);
        }
    }
    })

  }
}
