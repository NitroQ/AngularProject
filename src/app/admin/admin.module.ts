import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DashboardComponent, AdminComponent],
  imports: [CommonModule, RouterModule, AdminRoutingModule],
})
export class AdminModule {}
