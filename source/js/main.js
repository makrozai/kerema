$(document).ready(function(){

  $('.single-item').slick({
    fade:true,
    autoplay: true,
    autoplaySpeed: 3000
  });
  $('.c-slider-principal').slick({
    fade:true,
    autoplay: true,
    autoplaySpeed: 3000
  });
  $('.c-slider-gallery').slick({
    fade:true,
    autoplay: true,
    autoplaySpeed: 3000
  });
  $('.c-slider-testimonial').slick({
    fade:true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  );
  wow.init();

});
