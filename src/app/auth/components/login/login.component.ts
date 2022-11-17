import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginauth!: FormGroup;
  login: boolean = false;
  constructor(private router: Router, private fb: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.loginauth = this.fb.group({
      username: [''],
      password: [''],
    });

    if (sessionStorage.getItem('isLoggedIn') == 'true' && sessionStorage.getItem('username') != null) {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  checkLogin(): void {
    if (
      (this.loginauth.value.username == '' && this.loginauth.value.password == '') ||
      (this.loginauth.value.username == null && this.loginauth.value.password == null)
    ) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: 'warning',
        title: 'Please enter username and password',
      });
      // alert('Please enter username and password');
    } else if (this.loginauth.value.username == '' || this.loginauth.value.username == null) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: 'warning',
        title: 'Please enter username',
      });
    } else if (this.loginauth.value.password == '' || this.loginauth.value.password == null) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: 'warning',
        title: 'Please enter password',
      });
    } else if (this.loginauth != null) {
      this.api.getUser().subscribe((res) => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].username == this.loginauth.value.username && res[i].password == this.loginauth.value.password) {
            this.login = true;
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('usertype', res[i].usertype);
            sessionStorage.setItem('username', res[i].username);
            sessionStorage.setItem('firstname', res[i].firstname);
            this.router.navigate(['/admin/dashboard']);
          }
        }
        this.loginSuccess();
      });
    }
  }

  loginSuccess() {
    if (!this.login) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'error',
        title: 'Wrong Username or Password',
      });
    }
  }
}
