import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultComponent } from './public/components/consult/consult.component';
import { ContactComponent } from './public/components/contact/contact.component';
import { ExploreGalleryComponent } from './public/components/explore-gallery/explore-gallery.component';
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
