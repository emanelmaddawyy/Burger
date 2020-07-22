
$(document).ready(function () {
    
    new WOW().init();
  
    $('.collapse').collapse();
    
    $('.owl-carousel').owlCarousel({
      rtl:true,
      loop:true,
      margin:0,
      nav:true,
      navText:true,
     dots: true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })

    });

    
   
    $(function () {
      $(document).scroll(function () {
        var $nav = $(".fixed");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
      });
