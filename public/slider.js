$(document).ready(function(){
      $('.slider').slick({
		  dots: true,
		  infinite: true,
		  speed: 700,
		  autoplay: true,
		  autoplaySpeed: 10000,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  variableWidth: false,
		  arrows: true,
		  mobileFirst: true,
		  respondTo: 'slider',
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 8,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 5,
		        slidesToScroll: 2
		      }
		    }
		    
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
				});
  });