import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-design-home-office',
  templateUrl: './design-home-office.component.html',
  styleUrls: ['./design-home-office.component.scss'],
})
export class DesignHomeOfficeComponent implements OnInit {
  homeOfficeDesigns: any = [];
  addDesignDetails(): void {
    this.router.navigate(['/admin/add/design'], { queryParams: { category: 'homeoffice' } });
  }
  updateDesignDetails(row : any): void {
    this.router.navigate(['/admin/view/design'],  { queryParams: {  id: row.id, category: 'homeoffice' } } );
  }

  deleteDesignDetails(row: any) {
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
        this.deleteImage(row);
        Swal.fire('Deleted!', 'This image has been deleted.', 'success');
      }
    });
  }
  constructor(private router: Router, private api: ApiService) {}

  ngOnInit(): void {
    this.getImage();
  }

  getImage() {
    this.api.getImage().subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].category == 'homeoffice') {
          this.homeOfficeDesigns.push(res[i]);
        }
      }
    });
  }
  deleteImage(row: any) {
    this.homeOfficeDesigns = [];
    this.api.deleteImage(row.id).subscribe((res) => {
      this.getImage();
    });
  }
}
