import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-app-repartidor-routing',
  templateUrl: './app-repartidor-routing.component.html',
  styleUrls: ['./app-repartidor-routing.component.css']
})
export class AppRepartidorRoutingComponent implements OnInit {

  deviceInfo = null;
  appStore: string;
  playStore: string;

  constructor( private deviceService: DeviceDetectorService,
               private router: Router ) 
  {
    this.appStore = 'https://apps.apple.com/us/app/repartidor-al-paso/id1547179186';
    this.playStore = 'https://play.google.com/store/apps/details?id=app.alpaso.repartidor';
  }

  ngOnInit(): void {
    this.routing();
  }

  routing(): void {

    this.deviceInfo = this.deviceService.getDeviceInfo();

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
        window.location.href = this.appStore;
      } else if ( this.deviceInfo.os === 'Android' ) {
        window.location.href = this.playStore;
      } else {
        this.router.navigate(['/roundsman-register']);
      }
    } else {
      this.router.navigate(['/roundsman-register']);
    }

  }

}
