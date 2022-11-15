import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../../../api.service';
import { UserModel } from './add-user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;
  userModelObj: UserModel = new UserModel();
  userData!: any;

  constructor(private router: Router, private fb: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      usertype: [''],
      firstname: [''],
      lastname: [''],
      middlename: [''],
      username: [''],
      email: [''],
      contact: [''],
      password: [''],
      repeatpass: [''],
    });
  }

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
        this.postUserDetails();
        Swal.fire('Successfully added!', '', 'success');
        this.router.navigate(['/admin/user/management']);
      } else if (result.isDenied) {
        Swal.fire('No user added', '', 'info');
        this.userForm.reset();
      }
    });
  }

  postUserDetails() {
    if (this.userForm.value.password == this.userForm.value.repeatpass) {
      this.userModelObj.usertype = this.userForm.value.usertype;
      this.userModelObj.firstname = this.userForm.value.firstname;
      this.userModelObj.lastname = this.userForm.value.lastname;
      this.userModelObj.middlename = this.userForm.value.middlename;
      this.userModelObj.username = this.userForm.value.username;
      this.userModelObj.email = this.userForm.value.email;
      this.userModelObj.contact = this.userForm.value.contact;
      this.userModelObj.password = this.userForm.value.password;

      this.api.postUser(this.userModelObj).subscribe(
        (res) => {
          console.log(res);
          alert('User added successfully');
          let ref = document.getElementById('cancel');
          ref?.click();
          this.userForm.reset();
        },
        (err) => {
          alert('Something went wrong');
        }
      );
    } else {
      alert('Passwords does not match');
    }
  }
}
