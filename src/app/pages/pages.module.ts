import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { HomeComponent } from './home/home.component';
import { RoundsmanRegisterComponent } from './roundsman-register/roundsman-register.component';
import { StoreRegisterComponent } from './store-register/store-register.component';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';
import { LandingStoreComponent } from './landing-store/landing-store.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    RoundsmanRegisterComponent,
    StoreRegisterComponent,
    AboutComponent,
    LegalComponent,
    LandingStoreComponent
  ],
  entryComponents: []
})
export class PagesModule { }
