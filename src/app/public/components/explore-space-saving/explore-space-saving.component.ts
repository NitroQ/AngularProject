import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-explore-space-saving',
  templateUrl: './explore-space-saving.component.html',
  styleUrls: ['./explore-space-saving.component.scss'],
})
export class ExploreSpaceSavingComponent implements OnInit {
  spaceSavingDesigns: any = [ ];  
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
         if(res[i].category == "spacesaving"){
          this.spaceSavingDesigns.push(res[i]);
        }
    }
    })

  }
}
