import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultComponent } from './public/components/consult/consult.component';
import { ContactComponent } from './public/components/contact/contact.component';
import { ExploreBathroomComponent } from './public/components/explore-bathroom/explore-bathroom.component';
import { ExploreBedroomComponent } from './public/components/explore-bedroom/explore-bedroom.component';
import { ExploreGalleryComponent } from './public/components/explore-gallery/explore-gallery.component';
import { ExploreHomeOfficeComponent } from './public/components/explore-home-office/explore-home-office.component';
import { ExploreKitchenComponent } from './public/components/explore-kitchen/explore-kitchen.component';
import { ExploreLivingRoomComponent } from './public/components/explore-living-room/explore-living-room.component';
import { ExploreSpaceSavingComponent } from './public/components/explore-space-saving/explore-space-saving.component';
import { ExploreComponent } from './public/components/explore/explore.component';
import { HomeComponent } from './public/components/home/home.component';
import { PublicComponent } from './public/public.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'public/home',
    pathMatch: 'full',
  },
  {
    path: 'public',
    component: PublicComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'explore',
        component: ExploreComponent,
        children: [
          {
            path: 'gallery',
            component: ExploreGalleryComponent,
          },
          {
            path: 'kitchen',
            component: ExploreKitchenComponent,
          },
          {
            path: 'bedroom',
            component: ExploreBedroomComponent,
          },
          {
            path: 'living-room',
            component: ExploreLivingRoomComponent,
          },
          {
            path: 'bathroom',
            component: ExploreBathroomComponent,
          },
          {
            path: 'space-saving',
            component: ExploreSpaceSavingComponent,
          },
          {
            path: 'home-office',
            component: ExploreHomeOfficeComponent,
          },
        ],
      },
      { path: 'consult', component: ConsultComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
