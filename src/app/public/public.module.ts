import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { HomeComponent } from './components/home/home.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ConsultComponent } from './components/consult/consult.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [PublicComponent, HomeComponent, ExploreComponent, ConsultComponent, ContactComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class PublicModule {}
