import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  // ** BAR CHART OPTIONS
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        grid: { display: false },
        display: false,
      },
      y: {
        grid: { display: false },
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 100],
        backgroundColor: ['#FF5E15'],
      },
    ],
  };

  // hover event
  public chartHovered({ event, active }: { event?: ChartEvent; active?: {}[] }): void {
    console.log(event, active);
  }
  // table data
  pendingConsultations: any = [];
  pendingConsult : number = 0;
  cancelConsult : number = 0;
  completedConsult : number = 0;
  totalConsult : number = 0;
  totalContact : number = 0;
  constructor(private api: ApiService) {  }

  ngOnInit(): void {
    this.getBookingDetails();
    this.getContactDetails();
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
