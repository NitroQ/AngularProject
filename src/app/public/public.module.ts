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
import { ExploreKitchenComponent } from './components/explore-kitchen/explore-kitchen.component';
import { ExploreBedroomComponent } from './components/explore-bedroom/explore-bedroom.component';
import { ExploreLivingRoomComponent } from './components/explore-living-room/explore-living-room.component';
import { ExploreBathroomComponent } from './components/explore-bathroom/explore-bathroom.component';
import { ExploreSpaceSavingComponent } from './components/explore-space-saving/explore-space-saving.component';
import { ExploreHomeOfficeComponent } from './components/explore-home-office/explore-home-office.component';
@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    ConsultComponent,
    ContactComponent,
    ExploreGalleryComponent,
    ExploreComponent,
    ExploreKitchenComponent,
    ExploreBedroomComponent,
    ExploreLivingRoomComponent,
    ExploreBathroomComponent,
    ExploreSpaceSavingComponent,
    ExploreHomeOfficeComponent,
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
