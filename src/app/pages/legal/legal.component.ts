import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

 // Firebase
import { AngularFireAnalytics } from '@angular/fire/analytics';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.css']
})
export class LegalComponent implements OnInit {

  constructor( private analytics: AngularFireAnalytics,
               private router: Router ) {

    // Guardar registro Google Anatytics
    this.analytics.logEvent('page_view', {
      page_location: this.router.url,
      page_path: this.router.url,
      page_title: 'Legal Terminos y condiciones'
    });

  }

  ngOnInit(): void {
  }

}
