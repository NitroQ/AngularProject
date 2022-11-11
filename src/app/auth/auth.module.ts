import { NgModule } from '@angular/core';
import { LoginComponent } from '../admin/pages/login/login.component';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [LoginComponent, AuthComponent],
  imports: [RouterModule, AuthRoutingModule],
})
export class AuthModule {}
