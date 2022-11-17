import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-consultancies',
  templateUrl: './consultancies.component.html',
  styleUrls: ['./consultancies.component.scss'],
})
export class ConsultanciesComponent implements OnInit {
  consultationDatas: any;
  btnView(row: any): void {
    this.router.navigate(['/admin/view/consultation/'], { queryParams: { id: row.id } });
  }
  btnDelete(row: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteBooking(row);
        Swal.fire('Deleted!', 'This consultation has been deleted.', 'success');
      }
    });
  }

  constructor(private router: Router, private api: ApiService) {}

  ngOnInit(): void {
    this.getBookingDetails();
  }

  getBookingDetails() {
    this.api.getBooking().subscribe((res) => {
      this.consultationDatas = res;
    });
  }
  deleteBooking(row: any) {
    this.api.deleteBooking(row.id).subscribe((res) => {
      this.getBookingDetails();
    });
  }
}
