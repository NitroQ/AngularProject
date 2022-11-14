import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-explore-home-office',
  templateUrl: './explore-home-office.component.html',
  styleUrls: ['./explore-home-office.component.scss'],
})
export class ExploreHomeOfficeComponent implements OnInit {
  homeOfficeDesigns: any = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getImage();
  }

  getImage(){
    this.api.getImage()
    .subscribe(res=>{
      for (let i = 0; i < res.length; i++) {
         if(res[i].category == "homeoffice"){
          this.homeOfficeDesigns.push(res[i]);
        }
    }
    })

  }
}
