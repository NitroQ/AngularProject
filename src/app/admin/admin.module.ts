import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './components/header/header.component';
import { ConsultanciesComponent } from './components/consultancies/consultancies.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DesignKitchenComponent } from './components/design-kitchen/design-kitchen.component';
import { DesignBedroomComponent } from './components/design-bedroom/design-bedroom.component';
import { DesignLivingRoomComponent } from './components/design-living-room/design-living-room.component';
import { DesignBathroomComponent } from './components/design-bathroom/design-bathroom.component';
import { DesignSpaceSavingComponent } from './components/design-space-saving/design-space-saving.component';
import { DesignHomeOfficeComponent } from './components/design-home-office/design-home-office.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { NgChartsModule } from 'ng2-charts';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ViewConsultComponent } from './components/view/view-consult/view-consult.component';
import { ViewContactComponent } from './components/view/view-contact/view-contact.component';
import { ViewDesignComponent } from './components/view/view-design/view-design.component';
import { AddDesignComponent } from './components/add/add-design/add-design.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    NavListComponent,
    SidenavComponent,
    HeaderComponent,
    ConsultanciesComponent,
    ContactUsComponent,
    DesignKitchenComponent,
    DesignBedroomComponent,
    DesignLivingRoomComponent,
    DesignBathroomComponent,
    DesignSpaceSavingComponent,
    DesignHomeOfficeComponent,
    UserManagementComponent,
    ViewConsultComponent,
    ViewContactComponent,
    ViewDesignComponent,
    AddDesignComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgChartsModule,
    ModalModule,
    NgxDropzoneModule
  ],
})
export class AdminModule {}
