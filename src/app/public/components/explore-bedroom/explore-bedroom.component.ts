import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-explore-bedroom',
  templateUrl: './explore-bedroom.component.html',
  styleUrls: ['./explore-bedroom.component.scss'],
})
export class ExploreBedroomComponent implements OnInit {
  bedroomDesigns: any = [];
  addImage !: FormGroup;
  imageData !: any;
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
         if(res[i].category == "bedroom"){
          this.bedroomDesigns.push(res[i]);
        }
    }
    })

  }
}
