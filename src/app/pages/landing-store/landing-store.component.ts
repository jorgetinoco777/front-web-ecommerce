import { Component, OnInit } from '@angular/core';

import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-landing-store',
  templateUrl: './landing-store.component.html',
  styleUrls: ['./landing-store.component.css']
})
export class LandingStoreComponent implements OnInit {

  deviceInfo = null;
  appStore: string;
  playStore: string;

  constructor( private deviceService: DeviceDetectorService ) {
    this.appStore = 'https://apps.apple.com/us/app/id1522625554';
    this.playStore = 'https://play.google.com/store/apps/details?id=app.gocomunicacion.alpaso';
  }

  ngOnInit(): void {
    this.epicFunction();

  }

  epicFunction() {

    this.deviceInfo = this.deviceService.getDeviceInfo();

    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();

    console.log(this.deviceInfo);
    console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.

    // Validar si es mobile or tablet
    if ( isMobile || isTablet ) {
      if ( this.deviceInfo.os === 'iOS' ) {
        window.location.href = this.appStore;
      } else if ( this.deviceInfo.os === 'Android' ) {
        window.location.href = this.playStore;
      }
    }

  }

}
