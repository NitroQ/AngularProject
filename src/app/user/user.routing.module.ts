import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ConsultComponent } from './pages/consult/consult.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './user.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ConsultFormsComponent } from '../components/consult-forms/consult-forms.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormsComponent } from '../components/contact-forms/contact-forms.component';
import { HomeHeaderComponent } from '../components/home-header/home-header.component';
import { ExploreHeaderComponent } from '../components/explore-header/explore-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'explore',
        component: ExploreComponent,
      },
      {
        path: 'consult',
        component: ConsultComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(userRoutes, { enableTracing: true }),
    CarouselModule,
    BsDatepickerModule,
    TimepickerModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  exports: [RouterModule],
  declarations: [HomeComponent, ExploreComponent, ConsultComponent, ContactComponent, ContactFormsComponent, ConsultFormsComponent, HomeHeaderComponent, ExploreHeaderComponent],
})
export class UserRoutingModule {}
