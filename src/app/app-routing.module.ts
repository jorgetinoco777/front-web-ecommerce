import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component';
import { RoundsmanRegisterComponent } from './pages/roundsman-register/roundsman-register.component';
import { StoreRegisterComponent } from './pages/store-register/store-register.component';
import { AboutComponent } from './pages/about/about.component';
import { LegalComponent } from './pages/legal/legal.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'store-register',
    component: StoreRegisterComponent
  },
  {
    path: 'roundsman-register',
    component: RoundsmanRegisterComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'legal',
    component: LegalComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
