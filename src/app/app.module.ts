import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PagesModule } from "./pages/pages.module";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';

import { APP_BASE_HREF } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';

// Environments
import { environment } from "../environments/environment.prod";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,

    AngularFireModule.initializeApp( environment.firebaseConfig ),
    AngularFireAnalyticsModule,

    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    PagesModule,
    
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: window['_app_base'] || '/' }, 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
