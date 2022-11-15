import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactData: any = [];
  btnView(row: any): void {
    this.router.navigate(['/admin/view/contact'], { queryParams: { id: row.id } });
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
        this.deleteContactDetails(row);
        Swal.fire('Deleted!', 'This contact has been deleted.', 'success');
      }
    });
  }

  constructor(private router: Router, private api: ApiService) {}

  ngOnInit(): void {
    this.getContactDetails();
  }

  getContactDetails() {
    this.api.getContact().subscribe((res) => {
      this.contactData = res;
    });
  }
  deleteContactDetails(row: any) {
    this.api.deleteContact(row.id).subscribe((res) => {
      this.getContactDetails();
    });
  }
}
