import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  user_id: string;
  email: string;
  name: string;

  constructor( private router: Router,
               private rutaActiva: ActivatedRoute,
               private analytics: AnalyticsService ) 
  {

    //this.user_id = this.rutaActiva.snapshot.paramMap.get("user_id");
    this.email = this.rutaActiva.snapshot.paramMap.get("email");
    //this.name = this.rutaActiva.snapshot.paramMap.get("name");

  }

  ngOnInit(): void {

    //Guardar evento
    this.analytics.registerEvent('page_view', {
      page_location: this.router.url,
      page_path: this.router.url,
      page_title: 'Routing App Repartidor'
    });

  }

}
