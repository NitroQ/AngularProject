import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ConsultComponent } from './components/consult/consult.component';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [
    HomeComponent,
    ExploreComponent,
    ConsultComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
