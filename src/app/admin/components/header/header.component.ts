import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  name !: any;
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.name =  sessionStorage.getItem('firstname');
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}
