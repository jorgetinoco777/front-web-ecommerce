import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

// Firebase Analytics
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-app-repartidor-routing',
  templateUrl: './app-repartidor-routing.component.html',
  styleUrls: ['./app-repartidor-routing.component.css']
})
export class AppRepartidorRoutingComponent implements OnInit {

  deviceInfo = null;
  appStore: string;
  playStore: string;

  constructor( private analytics: AngularFireAnalytics,
               // private deviceService: DeviceDetectorService,
               private router: Router,
               private _routingAppService: UtilsService ) 
  {

    // Obtener info device
    //this.deviceInfo = this.deviceService.getDeviceInfo();

    // Guardar registro Google Anatytics
    this.analytics.logEvent('page_view', {
      page_location: this.router.url,
      page_path: this.router.url,
      page_title: 'Routing App Repartidor'
    });

    this.appStore = 'https://apps.apple.com/us/app/repartidor-al-paso/id1547179186';
    this.playStore = 'https://play.google.com/store/apps/details?id=app.alpaso.repartidor';
  }

  ngOnInit(): void {
    this._routingAppService.routing( this.appStore, this.playStore, '/roundsman-register' );
  }

}
