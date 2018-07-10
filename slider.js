$(document).ready(function(){
      $('.slider').slick({
		  dots: true,
		  infinite: false,
		  speed: 500,
		  autoplay: false,
		  autoplaySpeed: 5000,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  variableWidth: false,
		  arrows: true,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 8,
		        slidesToScroll: 3,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 8,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 8,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		});
  });