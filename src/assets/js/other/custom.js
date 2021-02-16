(function($) {
	'use strict';

	// Navbar JS
	$(window).on('scroll',function() {
		if ($(this).scrollTop()>200){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});
	$('.navbar-nav li a').on('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 70
		}, 1500);
		e.preventDefault();
	});
	$(document).on('click','.navbar-collapse.show',function(e){
		if( $(e.target).is('a') && $(e.target).attr('class')!= 'dropdown-toggle' ){
			$(this).collapse('hide');
		}
	});	

	// Screenshot JS
	$('.screenshot-slider').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		dots:true,
		center:true,
		smartSpeed:2000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:5
			}
		}
	})

	// How Use JS
	$('.how-use-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		dots:true,
		center:true,
		smartSpeed:2000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			992:{
				items:1
			}
		}
	})


	// Tsetimonial Slider JS
	$('.testimonial-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText:[
			"<i class='flaticon-left'></i>",
			"<i class='flaticon-right'></i>"
		],
		dots:false,
		items:1,
		smartSpeed:2000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},

			992: {
				items:1,
			}
		}
	})

	// Home Popup Video
	$('.popup-vimeo').magnificPopup({
		disableOn:300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	// Company Slider JS
	$('.company-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		dots:false,
		smartSpeed:2000,
		autoplay:true,
		autolayTimeout:1500,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})

	// Testimonial Slider JS
	$('.testimonial-slider-area').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText:[
			"<i class='flaticon-left'></i>",
			"<i class='flaticon-right'></i>"
		],
		dots:false,
		smartSpeed:2000,
		items:1
	});

	// Company Slider JS
	$('.case-study-slider').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		dots:true,
		smartSpeed:2000,
		stagePadding:20,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})

	// Testimonial Slider JS
	$('.testimonial-slider-wrapper').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots:false,
		smartSpeed:2000,
		items:1
	})

	// Team Slider JS
	$('.team-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		dots:true,
		smartSpeed:2000,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})

	// Slick Slider Testimonial
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		draggable: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		arrows: true,
		centerMode: true,
		focusOnSelect: true,
		centerPadding: '20px',
		responsive: [
			{
			  breakpoint: 450,
			  settings: {
				dots: false,
				slidesToShow: 3,  
				centerPadding: '0px',
				}
			},
			{
			  breakpoint: 420,
			  settings: {
				autoplay: true,
				dots: false,
				slidesToShow: 1,
				centerMode: false,
				}
			}
		]
	});
	
	//Back To Top
	$(window).on('load',function(){
		$('.top-btn').fadeOut();
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
				$('.top-btn').fadeIn();
			}
		else {
			$('.top-btn').fadeOut();
		}
	});
	$('.top-btn').on('click',function(){
		$("html, body").animate({ scrollTop: 0 }, 3000);
		return false;
	});

	// Showcase Portfolio
	$('#Container').mixItUp();	

	//Showcase Popup
	$('.popup-gallery').magnificPopup({
		type: 'image'
	});
	
	//WOW JS
	new WOW().init();
	
})(jQuery);


