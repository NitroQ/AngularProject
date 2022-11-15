import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  createUser() {
    Swal.fire({
      title: 'Are you sure?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Add',
      denyButtonText: `Don't add`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Successfully added!', '', 'success');
        this.router.navigate(['/admin/user/management']);
      } else if (result.isDenied) {
        Swal.fire('No user added', '', 'info');
      }
    });
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
