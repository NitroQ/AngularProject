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
  bedroomDesigns: any = [];
  livingRoomDesigns: any = [];
  bathroomDesigns: any = [];
  spaceSavingDesigns: any = [];
  homeOfficeDesigns: any = [];

  
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
        }else if(res[i].category == "bedroom"){
          this.bedroomDesigns.push(res[i]);
        }else if(res[i].category == "livingroom"){
          this.livingRoomDesigns.push(res[i]);
        }else if(res[i].category == "bathroom"){
          this.bathroomDesigns.push(res[i]);
        }else if(res[i].category == "spacesaving"){
          this.spaceSavingDesigns.push(res[i]);
        }else if(res[i].category == "homeoffice"){
          this.homeOfficeDesigns.push(res[i]);
        }
    }
    })

  }





  
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
