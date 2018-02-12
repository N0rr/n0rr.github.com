'use strict';

var slider = function() {
  $(".more-info__arrow-prev").click(function () {
  owl.trigger("prev.owl");
    });
  $(".more-info__arrow-next").click(function () {
    owl.trigger("next.owl");
  });   

  var owl = $(".more-info__slider");
  owl.owlCarousel({
    items: 1,
    margin: 0,
    pagination: false,          
    pullDrag: true,
    mouseDrag: true,
    loop: true
  }); 
};

window.addEventListener('load', slider);  