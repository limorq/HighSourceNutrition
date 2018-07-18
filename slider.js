$(document).ready(function(){
      $('.slider').slick({
		  dots: true,
		  infinite: false,
		  speed: 500,
		  autoplay: false,
		  autoplaySpeed: 5000,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  variableWidth: false,
		  arrows: true,
		  mobileFirst: true,
		  respondTo: 'slider',
		  
		});
  });