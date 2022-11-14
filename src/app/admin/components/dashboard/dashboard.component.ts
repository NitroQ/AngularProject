import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

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
  pendingConsultations: any = [
    {
      name: 'Sample Notice',
      email: 'sample@email.com',
      type: 'Property Type',
      date: 'Date',
    },
    {
      name: 'Sample Notice',
      email: 'sample@email.com',
      type: 'Property Type',
      date: 'Date',
    },
  ];
  constructor() {}
}
