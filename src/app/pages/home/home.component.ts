import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
    $('.features-slider.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      nav: false,
      dots: true,
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 6000,
      dotsContainer: '.features-content'
    });
  }

  goToRegisterBussiness() {
    this.router.navigateByUrl('/store-register');
  }

}
