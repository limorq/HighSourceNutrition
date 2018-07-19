$(document).ready(function(){
      $('.slider').slick({
		  dots: true,
		  infinite: true,
		  speed: 500,
		  autoplay: true,
		  autoplaySpeed: 5000,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  variableWidth: false,
		  arrows: true,
		  mobileFirst: true,
		  respondTo: 'slider',
		  
		});
  });