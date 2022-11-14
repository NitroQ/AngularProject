import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-explore-kitchen',
  templateUrl: './explore-kitchen.component.html',
  styleUrls: ['./explore-kitchen.component.scss'],
})
export class ExploreKitchenComponent implements OnInit {
  kitchenDesigns: any = [];
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
         if(res[i].category == "kitchen"){
          this.kitchenDesigns.push(res[i]);
        }
    }
    })

  }
}
