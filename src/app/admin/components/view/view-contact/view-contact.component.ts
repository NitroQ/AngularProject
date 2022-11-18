import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {
  contactValue: any;
  constructor(private route: ActivatedRoute, private router: Router, private api : ApiService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');

    this.api.getContact()
    .subscribe(res=>{
      for (let i = 0; i < res.length; i++) {
        if(res[i].id == id){
          this.contactValue = res[i];
          console.log(this.contactValue);
        }
    }
      
    })
  }
  backContact(){
    this.router.navigate(['/admin/contact']);
  }

}
