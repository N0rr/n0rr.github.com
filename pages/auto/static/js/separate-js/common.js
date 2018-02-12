'use strict';

var slider = function() {
  $(".kit__slider-prev").click(function () {
  owl.trigger("prev.owl");
    });
  $(".kit__slider-next").click(function () {
    owl.trigger("next.owl");
  });   

  var owl = $(".kit__stitch-color-items");
  owl.owlCarousel({
    items: 3,
    margin: 12,
    pagination: false,          
    pullDrag: true,
    mouseDrag: true,
    loop: true
  }); 
};

window.addEventListener('load', slider);  