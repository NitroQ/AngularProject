import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// angular material UI
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
// ngx-bootstrap UI
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
// Angular Components
import { AppComponent } from './app.component';

// import { HomeComponent } from './user/pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ExploreComponent } from './user/pages/explore/explore.component';
// import { ConsultComponent } from './user/pages/consult/consult.component';
// import { ContactComponent } from './user/pages/contact/contact.component';

import { ReactiveFormsModule } from '@angular/forms';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminRoutingModule } from './admin/admin.routing.component';
import { UserRoutingModule } from './user/user.routing.module';
// import { LoginComponent } from './admin/pages/login/login.component';
// import { HomeHeaderComponent } from './components/home-header/home-header.component';
// import { ExploreHeaderComponent } from './components/explore-header/explore-header.component';
// import { ConsultFormsComponent } from './components/consult-forms/consult-forms.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { ContactFormsComponent } from './components/contact-forms/contact-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // HomeHeaderComponent,
    // ExploreHeaderComponent,
    // ConsultFormsComponent,
    // ContactFormsComponent,
    AdminComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    ReactiveFormsModule,
    CarouselModule,
    AdminRoutingModule,
    UserRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
