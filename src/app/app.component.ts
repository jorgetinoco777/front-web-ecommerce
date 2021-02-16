import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Al Paso Delivery';
  duration = 500;

  ngOnInit(): void {
    $("#scrollUp").on('click', function () {
      $('html, body').animate({
          scrollTop: 0
      }, this.duration);
    });
  }

}
