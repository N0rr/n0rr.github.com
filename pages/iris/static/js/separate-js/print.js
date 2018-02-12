'use strict';

var whyPItemAll = document.querySelectorAll('.whyP__item');
var whyPItems = document.querySelector('.whyP__items');
var whyOwlContainer = document.getElementById('whyP__slider').querySelector('.owl-stage-outer');

var whySlider = function() {    
  var itemD = whyPItemAll;
  var itemsD = whyPItems; 
  var removeSlider = document.getElementById('whyP__slider').querySelector('.owl-stage-outer');  
  
  if (itemsD.classList.contains('slider__carousel')) {   
    whyOwlContainer = removeSlider;       
  }
  
  if (window.innerWidth < 768) {    
    if (!itemsD.classList.contains('slider__carousel')) { 
      whyPItems.classList.add('slider__carousel');
      whyPItems.classList.add('owl-theme');
      whyPItems.classList.add('owl-loaded');
      whyPItems.classList.add('owl-carousel');                        
      if (whyOwlContainer != null) {        
        itemsD.appendChild(whyOwlContainer);  
        var owlItem = document.getElementById('whyP__slider').querySelectorAll('.owl-item'); 
        for (var i=0; i < itemD.length; i++) {
          owlItem[i].appendChild(itemD[i]);          
        } 
      }      
      $(".whyP__prev").click(function () {
      owl.trigger("prev.owl");
        });
      $(".whyP__next").click(function () {
        owl.trigger("next.owl");
      }); 
     
      var owl = $(".slider__carousel");      
      $(document).ready(function () {  
        owl.owlCarousel({
          items: 1,
          margin: 0,
          pagination: false,    
          dotsContainer: '.price__indicators',
          pullDrag: true,
          mouseDrag: true          
        });       
      });
    }   
  } else if (itemsD.classList.contains('slider__carousel') || itemsD.classList.contains('owl-carousel')) {
      itemsD.classList.remove('owl-carousel');
      itemsD.classList.remove('owl-theme');
      itemsD.classList.remove('owl-loaded');
      itemsD.classList.remove('slider__carousel'); 
      itemsD.removeChild(removeSlider);                   
      Array.prototype.forEach.call(itemD, function(item) {
        itemsD.appendChild(item);
    });    
  }
};

window.addEventListener('load', whySlider);
window.addEventListener('resize', whySlider);