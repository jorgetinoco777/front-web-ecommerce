import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-app-tiendas-routing',
  templateUrl: './app-tiendas-routing.component.html',
  styleUrls: ['./app-tiendas-routing.component.css']
})
export class AppTiendasRoutingComponent implements OnInit {

  deviceInfo = null;
  appStore: string;
  playStore: string;

  constructor( private analytics: AngularFireAnalytics,
               // private deviceService: DeviceDetectorService,
               private router: Router,
               private _routingAppService: UtilsService )
  {

    // Guardar registro Google Anatytics
    this.analytics.logEvent('page_view', {
      page_location: this.router.url,
      page_path: this.router.url,
      page_title: 'Routing App Tiendas'
    });

    this.appStore = 'https://apps.apple.com/us/app/al-paso-tiendas/id1548570480';
    this.playStore = 'https://play.google.com/store/apps/details?id=app.alpaso.tienda';

  }

  ngOnInit(): void {
    this._routingAppService.routing(this.appStore, this.playStore, '/store-register');
  }

}
