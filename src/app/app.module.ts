import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { ExploreComponent } from './pages/explore/explore.component';
import { ConsultComponent } from './pages/consult/consult.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { ExploreHeaderComponent } from './components/explore-header/explore-header.component';
import { ConsultFormsComponent } from './components/consult-forms/consult-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactFormsComponent } from './components/contact-forms/contact-forms.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ExplorekitchenComponent } from './pages/explorekitchen/explorekitchen.component';
import { ExplorebedroomComponent } from './pages/explorebedroom/explorebedroom.component';
import { ExplorelivingroomComponent } from './pages/explorelivingroom/explorelivingroom.component';
import { ExplorebathroomComponent } from './pages/explorebathroom/explorebathroom.component';
import { ExplorespacesavingComponent } from './pages/explorespacesaving/explorespacesaving.component';
import { ExplorehomeoffComponent } from './pages/explorehomeoff/explorehomeoff.component';
import { NgChartsModule } from 'ng2-charts';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'consult', component: ConsultComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'explorekitchen', component: ExplorekitchenComponent},
  { path: 'explorebedroom', component: ExplorebedroomComponent},
  { path: 'explorelv', component: ExplorelivingroomComponent},
  { path: 'explorebathroom', component: ExplorebathroomComponent},
  { path: 'exploressaving', component: ExplorespacesavingComponent},
  { path: 'explorehomeoff', component: ExplorehomeoffComponent}
];

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, ExploreComponent, ConsultComponent, ContactComponent, HomeHeaderComponent, ExploreHeaderComponent, ConsultFormsComponent, ContactFormsComponent, ExplorekitchenComponent, ExplorebedroomComponent, ExplorelivingroomComponent, ExplorebathroomComponent, ExplorespacesavingComponent, ExplorehomeoffComponent],
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicModule } from './public/public.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AppComponent],
>>>>>>> main
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    CarouselModule,
    NgChartsModule
=======
    FormsModule,
    HttpClientModule,
    PublicModule,
    RouterModule,
    AppRoutingModule,
    AuthModule,
    AdminModule,
    NgChartsModule,
>>>>>>> main
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
