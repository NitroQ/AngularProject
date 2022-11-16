import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-consultancies',
  templateUrl: './consultancies.component.html',
  styleUrls: ['./consultancies.component.scss'],
})
export class ConsultanciesComponent implements OnInit {
  consultationDatas: any = [
    {
      name: 'Sample Notice',
      email: 'sample@email.com',
      type: 'Property Type',
      date: 'Date',
      status: 'Pending',
    },
  ];
  btnView(): void {
    this.router.navigate(['/admin/view/consultation']);
  }
  btnDelete() {
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
        Swal.fire('Deleted!', 'This consultation has been deleted.', 'success');
      }
    });
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
