import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-view-consult',
  templateUrl: './view-consult.component.html',
  styleUrls: ['./view-consult.component.scss']
})
export class ViewConsultComponent implements OnInit {

  consultValue: any;
  constructor(private route: ActivatedRoute, private api : ApiService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');

    this.api.getBooking()
    .subscribe(res=>{
      for (let i = 0; i < res.length; i++) {
        if(res[i].id == id){
          this.consultValue = res[i];
          console.log(this.consultValue);
        }
    }
      
    })

  }

}
