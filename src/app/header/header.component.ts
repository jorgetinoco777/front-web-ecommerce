import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // MAIN MENU TOGGLER ICON (MOBILE SITE ONLY)
    $('[data-toggle="navbarToggler"]').click(function () {
      $('.navbar').toggleClass('active');
      $('body').toggleClass('canvas-open');
    });
    // MAIN MENU TOGGLER ICON
    $('.navbar-toggler').click(function () {
        $('.navbar-toggler-icon').toggleClass('active');
    });

    // NAVBAR STICKY
    var $stickyNav = $(".navbar-sticky");

    $(window).on("scroll load", function () {
      var scroll = $(window).scrollTop();
      //console.log("Scroll: ", scroll);
      if (scroll >= 120) {
          $stickyNav.addClass("navbar-sticky-moved-up");
      } else {
          $stickyNav.removeClass("navbar-sticky-moved-up");
      }
      // apply transition
      if (scroll >= 250) {
          $stickyNav.addClass("navbar-sticky-transitioned");
      } else {
          $stickyNav.removeClass("navbar-sticky-transitioned");
      }
      // sticky on
      if (scroll >= 500) {
          $stickyNav.addClass("navbar-sticky-on");
      } else {
          $stickyNav.removeClass("navbar-sticky-on");
      }

    });

  }

}
