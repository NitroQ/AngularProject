import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-consult',
  templateUrl: './view-consult.component.html',
  styleUrls: ['./view-consult.component.scss'],
})
export class ViewConsultComponent implements OnInit {
  createEmail() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, send it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Sent!', 'Your message has been sent.', 'success');
      }
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
