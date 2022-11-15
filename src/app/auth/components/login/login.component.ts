import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginauth !: FormGroup;
  login : boolean = false;
  constructor(private router: Router, private fb: FormBuilder, private api: ApiService) {}
  
  ngOnInit(): void {
    this.loginauth = this.fb.group({
      username: [''],
      password: ['']
   });

    if(sessionStorage.getItem('isLoggedIn') == 'true' &&  sessionStorage.getItem('username') !=  null){
      this.router.navigate(['/admin/dashboard']);
    } 
   
  }

  checkLogin(): void {
    if(this.loginauth.value.username == '' && this.loginauth.value.password == '' || this.loginauth.value.username == null && this.loginauth.value.password == null){
      alert('Please enter username and password');
    }else if(this.loginauth.value.username == ''  || this.loginauth.value.username == null){
      alert('Please enter username');
    }else if(this.loginauth.value.password == ''  || this.loginauth.value.password == null){
      alert('Please enter password');
    }else if(this.loginauth != null){
      this.api.getUser()
      .subscribe(res=>{
        for(let i = 0; i < res.length; i++){
          if(res[i].username == this.loginauth.value.username && res[i].password == this.loginauth.value.password){
            this.login = true;
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('usertype', res[i].usertype);
            sessionStorage.setItem('username', res[i].username);
            sessionStorage.setItem('firstname', res[i].firstname);
            this.router.navigate(['/admin/dashboard']);
          }
        }
        this.loginSuccess();
      })
  }
  }

  loginSuccess(){
    if(!this.login){
      alert('Wrong Username or Password');
    }
  }
}
