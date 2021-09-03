// Owl Carousel 





$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      nav: true,
      merge:true,
      navText: [
        "<img src='./IMAGES/left.svg' alt='' style='width: 25px; height: auto;'>",
        "<img src='./IMAGES/right.svg' alt='' style='width: 25px; height: auto;'>"
      ],
      responsive:{
        100:{
          items:1
      },
        500:{
            items:1
        },
        600:{
            items:2
        },

        900: 
        {
          items: 2
        }, 
        
        950: 
        {
          items: 3
        }

    }
    });
  });



