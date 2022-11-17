import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  visit : number = 0;
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getVisit().subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].id == 1) {
          this.visit += (parseInt(res[i].visit) + 1);
          console.log(this.visit);
          this.api.updateVisit({"visit" : this.visit}, 1)
          .subscribe(res=>{ 
            console.log(res);
          },
          err=>{
            alert("Something went wrong");
         });
          
        }
      }
      
    });
  }

}
