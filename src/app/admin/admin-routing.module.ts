import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddDesignComponent } from './components/add/add-design/add-design.component';
import { ConsultanciesComponent } from './components/consultancies/consultancies.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DesignBathroomComponent } from './components/design-bathroom/design-bathroom.component';
import { DesignBedroomComponent } from './components/design-bedroom/design-bedroom.component';
import { DesignHomeOfficeComponent } from './components/design-home-office/design-home-office.component';
import { DesignKitchenComponent } from './components/design-kitchen/design-kitchen.component';
import { DesignLivingRoomComponent } from './components/design-living-room/design-living-room.component';
import { DesignSpaceSavingComponent } from './components/design-space-saving/design-space-saving.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ViewConsultComponent } from './components/view/view-consult/view-consult.component';
import { ViewContactComponent } from './components/view/view-contact/view-contact.component';
import { ViewDesignComponent } from './components/view/view-design/view-design.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'consultancies',
        component: ConsultanciesComponent,
      },
      {
        path: 'contact',
        component: ContactUsComponent,
      },
      {
        path: 'kitchen',
        component: DesignKitchenComponent,
      },
      {
        path: 'bedroom',
        component: DesignBedroomComponent,
      },
      {
        path: 'living-room',
        component: DesignLivingRoomComponent,
      },
      {
        path: 'bathroom',
        component: DesignBathroomComponent,
      },
      {
        path: 'space-saving',
        component: DesignSpaceSavingComponent,
      },
      {
        path: 'home-office',
        component: DesignHomeOfficeComponent,
      },
      {
        path: 'management',
        component: UserManagementComponent,
      },
      {
        path: 'view/consultation',
        component: ViewConsultComponent,
      },
      {
        path: 'view/contact',
        component: ViewContactComponent,
      },
      {
        path: 'view/design',
        component: ViewDesignComponent,
      },
      {
        path: 'add/design',
        component: AddDesignComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class AdminRoutingModule {}
