import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminComponent implements OnInit {
  adminaccess : boolean = false;
  sideBarOpen = true;
  

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }



  constructor(private router: Router) {}
  ngOnInit(): void {
    if(sessionStorage.getItem('isLoggedIn') == 'true' &&  sessionStorage.getItem('username') !=  null){
      this.adminaccess = true;
    }else{
      this.redirectLogin();
    }
  }
  redirectLogin(){
    this.router.navigate(['/auth/login']);
  }

}
