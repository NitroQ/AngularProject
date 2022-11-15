import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  userLists: any = [ ];
  createUser(): void {
    this.router.navigate(['/admin/user/add-user']);
  }
  updateUserDetails(): void {
    this.router.navigate(['/admin/user/update-user']);
  }
  deleteUserDetails() {
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

  constructor(private router: Router, private api : ApiService) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
    this.api.getUser()
    .subscribe(res=>{
      this.userLists = res;
    })
  }

  deleteUser(row : any){
    this.api.deleteUser(row.id)
    .subscribe(res=>{
      alert("User deleted successfully");
      this.getUserDetails();
    })
  }
}
