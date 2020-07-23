import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PagesModule } from "./pages/pages.module";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';

import { APP_BASE_HREF } from '@angular/common'; 

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,

    PagesModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: window['_app_base'] || '/' }, 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
