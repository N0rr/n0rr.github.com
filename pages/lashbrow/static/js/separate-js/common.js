'use strict';

$(document).ready(function () {
  var owl = $(".cours__slider-items");
  owl.owlCarousel({
    items: 1,
    margin: 0,
    pagination: false,
    navContainer: '#customNav',
    dotsContainer: '.cours__slide-nav',
    mouseDrag: true,
    pullDrag: true,    
    loop: false  
  });
});






