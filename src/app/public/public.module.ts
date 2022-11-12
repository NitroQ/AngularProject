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
import { ExploreModule } from './explore/explore.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    ConsultComponent,
    ContactComponent,
    ExploreGalleryComponent,
    ExploreComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ExploreModule,
    CarouselModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
})
export class PublicModule {}
