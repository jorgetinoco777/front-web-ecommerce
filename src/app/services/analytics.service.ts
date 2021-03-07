import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Google Analytics
import { AngularFireAnalytics } from '@angular/fire/analytics';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor( private analytics: AngularFireAnalytics ) {}

  registerEvent( event: string, body: any ): void {
    // Guardar registro Google Anatytics
    this.analytics.logEvent( event, body );
  }

}
