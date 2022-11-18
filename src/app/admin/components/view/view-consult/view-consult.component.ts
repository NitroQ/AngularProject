import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../api.service';

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
  consultValue: any;
  constructor(private route: ActivatedRoute, private router : Router,  private api: ApiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('id');

    this.api.getBooking().subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].id == id) {
          this.consultValue = res[i];
          console.log(this.consultValue);
        }
      }
    });
  }

  backConsult(){
    this.router.navigate(['/admin/consultancies']);
  }
}
