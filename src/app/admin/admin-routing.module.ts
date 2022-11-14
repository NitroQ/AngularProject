import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ApplicationSettingsComponent } from './components/application-settings/application-settings.component';
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
        path: 'settings',
        component: ApplicationSettingsComponent,
      },
      {
        path: 'management',
        component: UserManagementComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class AdminRoutingModule {}
