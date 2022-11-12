import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { HomeComponent } from './components/home/home.component';
import { ConsultComponent } from './components/consult/consult.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ExploreGalleryComponent } from './components/explore-gallery/explore-gallery.component';
import { ExploreComponent } from './components/explore/explore.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PublicComponent, HomeComponent, ConsultComponent, ContactComponent, ExploreGalleryComponent, ExploreComponent],
  imports: [CommonModule, RouterModule, SharedModule, FormsModule, ReactiveFormsModule, HttpClientModule]
})
export class PublicModule {}
