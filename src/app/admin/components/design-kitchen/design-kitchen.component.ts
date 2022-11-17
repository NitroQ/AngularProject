import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-design-kitchen',
  templateUrl: './design-kitchen.component.html',
  styleUrls: ['./design-kitchen.component.scss'],
})
export class DesignKitchenComponent implements OnInit {
  kitchenDesigns: any = [];

  addDesignDetails(): void {
    this.router.navigate(['/admin/add/design/'], { queryParams: { category: 'kitchen' } });
  }
  updateDesignDetails(row : any): void {
    this.router.navigate(['/admin/view/design'],  { queryParams: {  id: row.id, category: 'kitchen' } } );
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
        if (res[i].category == 'kitchen') {
          this.kitchenDesigns.push(res[i]);
        }
      }
    });
  }
  deleteImage(row: any) {
    this.kitchenDesigns = [];
    this.api.deleteImage(row.id).subscribe((res) => {
      this.getImage();
    });
  }
}
