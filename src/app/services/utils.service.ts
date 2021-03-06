import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  deviceInfo = null;

  constructor( private deviceService: DeviceDetectorService,
               private router: Router ) {
    this.deviceInfo = this.deviceService.getDeviceInfo();
  }

  routing( appStore: string, playStore: string, routingToDesktop: string ): void {

    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();

    /*
    console.log("Info: ", this.deviceInfo);
    console.log("Is Mobile: ", isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log("Is Tablet: ", isTablet);  // returns if the device us a tablet (iPad etc)
    console.log("Is Desktop Device: ", isDesktopDevice); // returns if the app is running on a Desktop browser.
    */
    
    // Validar si es mobile or tablet
    if ( isMobile || isTablet ) {
      if ( this.deviceInfo.os === 'iOS' ) {
        window.location.href = appStore;
      } else if ( this.deviceInfo.os === 'Android' ) {
        window.location.href = playStore;
      } else {
        this.router.navigate([ routingToDesktop ]);
      }
    } else {
      this.router.navigate([ routingToDesktop ]);
    }

  }

}
