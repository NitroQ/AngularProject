import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [HeaderComponent, SidenavComponent],
  imports: [HeaderComponent, SidenavComponent],
})
export class AdminModule {}
