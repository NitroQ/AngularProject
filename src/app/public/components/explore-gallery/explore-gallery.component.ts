import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-explore-gallery',
  templateUrl: './explore-gallery.component.html',
  styleUrls: ['./explore-gallery.component.scss'],
})
export class ExploreGalleryComponent implements OnInit {
  // ** array for the loop of Kitchen Designs
  kitchenDesigns: any = [];
  
  addImage !: FormGroup;
  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.addImage = this.fb.group({
      description: [''],
      category: [''],
      dimensions: [''],
      price: [''],
      image: ['']
    })
    this.getImage();
  }

  getImage(){
    this.api.getImage()
    .subscribe(res=>{
      for (let i = 0; i < res.length; i++) {
        if(res[i].category == "kitchen"){
          this.kitchenDesigns.push(res[i]);
        }
    }
    })

  }


  bedroomDesigns: any = [
    {
      imgUrl: '../../../../assets/images/explore_main-images/bedroom Design/spring-inspired design.png',
      designName: 'Spring-Inspired Design',
      prodSize: "18' x 21'",
    },
  ];
  livingRoomDesigns: any = [
    {
      imgUrl: '../../../../assets/images/explore_main-images/Living Room Designs/organic-living-room.png',
      designName: 'Organic Living Room',
      prodSize: "18' x 21'",
    },
  ];
  bathroomDesigns: any = [
    {
      imgUrl: '../../../../assets/images/explore_main-images/Bathroom Designs/white-space-bathroom.png',
      designName: 'White Space Bathroom',
      prodSize: "18' x 21'",
    },
  ];
  spaceSavingDesigns: any = [
    {
      imgUrl: '../../../../assets/images/explore_main-images/Space_saving-Designs/wooden-room.png',
      designName: 'Wooden Room',
      prodSize: "18' x 21'",
    },
  ];
  homeOfficeDesigns: any = [
    {
      imgUrl: '../../../../assets/images/explore_main-images/Home_office-Designs/gray-toned-office.png',
      designName: 'Gray Toned Office',
      prodSize: "18' x 21'",
    },
  ];


  
  // ** custom options for the carousel, don't touch.
  designList: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    // ** nav buttons will only show if there are more than 4 items in the array.
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
}
