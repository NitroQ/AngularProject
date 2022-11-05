import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
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
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExploreComponent } from './pages/explore/explore.component';
import { ConsultComponent } from './pages/consult/consult.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { ExploreHeaderComponent } from './components/explore-header/explore-header.component';
import { ConsultFormsComponent } from './components/consult-forms/consult-forms.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'consult', component: ConsultComponent },
  { path: 'contact', component: ContactComponent },
];
@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, ExploreComponent, ConsultComponent, ContactComponent, HomeHeaderComponent, ExploreHeaderComponent, ConsultFormsComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
