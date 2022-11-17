import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-design-space-saving',
  templateUrl: './design-space-saving.component.html',
  styleUrls: ['./design-space-saving.component.scss'],
})
export class DesignSpaceSavingComponent implements OnInit {
  spaceSavingDesigns: any = [];
  addDesignDetails(): void {
    this.router.navigate(['/admin/add/design'], { queryParams: { category: 'spacesaving' } });
  }
  updateDesignDetails(): void {
    this.router.navigate(['/admin/view/design']);
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
        if (res[i].category == 'spacesaving') {
          this.spaceSavingDesigns.push(res[i]);
        }
      }
    });
  }
  deleteImage(row: any) {
    this.spaceSavingDesigns = [];
    this.api.deleteImage(row.id).subscribe((res) => {
      this.getImage();
    });
  }
}
