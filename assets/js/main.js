(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
    $('body').toggleClass('overflow-hidden');   
  }); 


  $(window).scroll(function(){
    if($(this).scrollTop() > 0){
        $('.header-area').addClass('sticky')
    } else{
        $('.header-area').removeClass('sticky')
    }
});


  // owlCarousel
  $(".career__slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i><img src="assets/img/Arrow-left.png" alt=""></i>',
      '<i><img src="assets/img/Arrow-right.png" alt=""></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });


  // page Animation
  // AOS.init({
  //   mirror: true,
  //   duration: 1500,
  //   initClassName: 'aos-init',
  //   once: true,
  // });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

 
})(jQuery);
