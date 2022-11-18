import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../api.service';
import { UserModel } from './update-user.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit {
  userForm!: FormGroup;
  userModelObjUpdate: UserModel = new UserModel();
  userData!: any;
  id!: any;
  type!: any;
  submitted: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.type = sessionStorage.getItem('usertype');
    this.id = this.route.snapshot.queryParamMap.get('id');

    if (this.type == 'user') {
      this.router.navigate(['/admin/dashboard']);
    }
    if (this.id == null || this.id == undefined || this.id == '') {
      this.router.navigate(['/admin/user/management']);
    }

    this.userForm = this.fb.group(
      {
        usertype: [''],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        middlename: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', Validators.required],
        contact: ['', Validators.required],
        password: ['', Validators.required],
        repeatpass: ['', Validators.required],
      },
      {
        validators: this.MustMatch('password', 'repeatpass'),
      }
    );

    this.api.getUser().subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].id == this.id) {
          this.userData = res[i];
          console.log(this.userData);
        }
      }
      this.userForm.controls['usertype'].setValue(this.userData.usertype);
      this.userForm.controls['firstname'].setValue(this.userData.firstname);
      this.userForm.controls['lastname'].setValue(this.userData.lastname);
      this.userForm.controls['middlename'].setValue(this.userData.middlename);
      this.userForm.controls['username'].setValue(this.userData.username);
      this.userForm.controls['email'].setValue(this.userData.email);
      this.userForm.controls['contact'].setValue(this.userData.contact);
    });
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const match = formGroup.controls[matchingControlName];
      if (match.errors && !match.errors?.['MustMatch']) {
        return;
      }
      if (control.value !== match.value) {
        match.setErrors({ MustMatch: true });
      } else {
        match.setErrors(null);
      }
    };
  }
  get form() {
    return this.userForm.controls;
  }

  updateUser() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    } else {
      this.userModelObjUpdate.id = this.userData.id;
      this.userModelObjUpdate.usertype = this.userForm.value.usertype;
      this.userModelObjUpdate.firstname = this.userForm.value.firstname;
      this.userModelObjUpdate.lastname = this.userForm.value.lastname;
      this.userModelObjUpdate.middlename = this.userForm.value.middlename;
      this.userModelObjUpdate.username = this.userForm.value.username;
      this.userModelObjUpdate.email = this.userForm.value.email;
      this.userModelObjUpdate.contact = this.userForm.value.contact;
      this.userModelObjUpdate.password = this.userData.password;

      this.api.updateUser(this.userModelObjUpdate, this.id).subscribe(
        (res) => {
          this.userForm.reset();
          this.updateUserDetails();
        },
        (err) => {
          alert('Something went wrong');
        }
      );
    }
  }

  updateUserDetails() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.updateUser();
        Swal.fire('Saved!', '', 'success');
        this.cancelUpdate();
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
        this.cancelUpdate();
      }
    });
  }

  cancelUpdate() {
    this.router.navigate(['/admin/user/management']);
  }
}
