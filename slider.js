$(document).ready(function(){
      $('.slider').slick({
		  dots: true,
		  infinite: true,
		  speed: 500,
		  autoplay: true,
		  autoplaySpeed: 5000,
		  slidesToShow: 10,
		  slidesToScroll: 1,
		  variableWidth: true,
		  arrows: true,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 8,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		});
  });