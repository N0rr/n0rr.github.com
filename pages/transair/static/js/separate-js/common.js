'use strict';

$(document).ready(function () {
  $(".slider__prev").click(function () {
      owl.trigger("prev.owl");
  });
  $(".slider__next").click(function () {
      owl.trigger("next.owl");
  });

  var owl = $(".slider__items");
  owl.owlCarousel({
    items: 1,
    margin: 0,
    pagination: false,
    navContainer: '#customNav',
    dotsContainer: '.reviews__indicators',
    mouseDrag: true,
    pullDrag: true,    
    loop: false  
  });
});






