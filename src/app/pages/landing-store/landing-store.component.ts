import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { DeviceDetectorService } from 'ngx-device-detector';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-landing-store',
  templateUrl: './landing-store.component.html',
  styleUrls: ['./landing-store.component.css']
})
export class LandingStoreComponent implements OnInit {

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
      page_title: 'Routing App Al Paso'
    });

    this.appStore = 'https://apps.apple.com/us/app/id1522625554';
    this.playStore = 'https://play.google.com/store/apps/details?id=app.gocomunicacion.alpaso';

  }

  ngOnInit(): void {
    this._routingAppService.routing( this.appStore, this.playStore, '/home');

  }

}
