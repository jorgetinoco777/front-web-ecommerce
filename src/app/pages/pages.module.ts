import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HomeComponent } from './home/home.component';
import { RoundsmanRegisterComponent } from './roundsman-register/roundsman-register.component';
import { StoreRegisterComponent } from './store-register/store-register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    RoundsmanRegisterComponent,
    StoreRegisterComponent
  ],
  entryComponents: []
})
export class PagesModule { }
