import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];
@NgModule({
  declarations: [AppComponent, NavbarComponent, HeaderComponent, HomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes, { enableTracing: true })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
