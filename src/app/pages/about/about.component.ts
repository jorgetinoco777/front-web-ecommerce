import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAnalytics } from '@angular/fire/analytics';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private analytics: AngularFireAnalytics,
               private router: Router )
  {

    // Guardar registro Google Anatytics
    this.analytics.logEvent('page_view', {
      page_location: this.router.url,
      page_path: this.router.url,
      page_title: 'Acerca de Al Paso Delivery'
    });

  }

  ngOnInit(): void {
  }

}
