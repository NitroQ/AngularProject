import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { data } from 'jquery';
import { BaseChartDirective } from 'ng2-charts';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit{

  // ** BAR CHART OPTIONS

  // table data
  pendingConsultations: any = [];
  pendingConsult : number = 0;
  cancelConsult : number = 0;
  completedConsult : number = 0;
  ongoingConsult : number = 0;
  totalConsult : number = 0;
  totalVisit : number = 0;
  consultData : number[] =[ 0, 0, 10, 10, 0, 0];
  totalContact : number = 0;
  constructor(private api: ApiService) {  }

  ngOnInit(): void {
    this.getBookingDetails();
    this.getContactDetails();
    this.getVisitDetails();

  }


  getVisitDetails(){
    this.api.getVisit().subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].id == 1) {                           
          this.totalVisit = res[i].visit; 
        }
      }
      
    });
  }
  getBookingDetails(){
    this.api.getBooking()
    .subscribe(res=>{
      for(let i = 0; i < res.length; i++){
        this.totalConsult++;
        if(res[i].status == 'pending'){
          this.pendingConsultations.push(res[i]);
          this.pendingConsult = this.pendingConsult + 1;
        }else if (res[i].status == 'cancelled'){
          this.cancelConsult = this.cancelConsult + 1;
        }else if (res[i].status == 'finished'){
          this.completedConsult = this.completedConsult + 1;
        }else if (res[i].status == 'ongoing'){
          this.ongoingConsult = this.ongoingConsult + 1;
        }
      }
      
    })
  }
  getContactDetails(){
    this.api.getContact()
    .subscribe(res=>{
      this.totalContact = res.length;
    })
  }

}
