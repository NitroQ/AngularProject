import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-design-home-office',
  templateUrl: './design-home-office.component.html',
  styleUrls: ['./design-home-office.component.scss'],
})
export class DesignHomeOfficeComponent implements OnInit {
  homeOfficeDesigns: any = [
    {
      image: 'sample image',
      description: 'description',
      dimension: 'dimension',
      price: 'price',
    },
  ];
  addDesignDetails(): void {
    this.router.navigate(['/admin/add/design']);
  }
  updateDesignDetails(): void {
    this.router.navigate(['/admin/view/design']);
  }
  deleteDesignDetails() {
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
        Swal.fire('Deleted!', 'This design has been deleted.', 'success');
      }
    });
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
