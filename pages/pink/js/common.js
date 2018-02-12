'use strict';

var sliderItems = document.querySelector('.price__items');
var sliderItem = document.querySelectorAll('.price__item');
var owlContainer;

var checkSlider = function() {    
  var itemD = sliderItem;
  var itemsD = sliderItems; 
  var removeSlider = document.getElementById('price__slider').querySelector('.owl-stage-outer');  
  
  if (itemsD.classList.contains('slider__carousel')) {   
    owlContainer = removeSlider;       
  }
  
  if (window.innerWidth < 700) {    
    if (!sliderItems.classList.contains('slider__carousel')) { 
      sliderItems.classList.add('slider__carousel', 'owl-theme', 'owl-loaded', 'owl-carousel');  
      if (owlContainer != null) {
        sliderItems.appendChild(owlContainer);
        document.querySelector('.price__indicators').style.display = 'flex';
        
        var owlItem = document.getElementById('price__slider').querySelectorAll('.owl-item');  
        
        for (var i=0; i < sliderItem.length; i++) {
          owlItem[i].appendChild(sliderItem[i]);
        } 
      }      
     
      var owl = $(".slider__carousel");      
      $(document).ready(function () {  
        owl.owlCarousel({
          items: 1,
          margin: 0,
          pagination: false,    
          dotsContainer: '.price__indicators',
          pullDrag: true,
          mouseDrag: true,
          onInitialize: function (event) {
            if ($('.price__item').length > 1) {
              this.settings.loop = false;
            }
          }
        });       
      });
    }
  } else if (sliderItems.classList.contains('slider__carousel')) {
      sliderItems.classList.remove('slider__carousel', 'owl-carousel', 'owl-theme', 'owl-loaded'); 
      sliderItems.removeChild(removeSlider);                   
      Array.prototype.forEach.call(sliderItem, function(item) {
        sliderItems.appendChild(item);
    });    
  }
};

window.addEventListener('load', checkSlider);
window.addEventListener('resize', checkSlider);


var priceSlider = function() {
  document.querySelector('.reviews__indicators').style.display = 'flex';
  $(document).ready(function () {
    $(".reviews__prev").click(function () {
        owl.trigger("prev.owl");
    });
    $(".reviews__next").click(function () {
        owl.trigger("next.owl");
    });
    
    var owl = $(".reviews__items");
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
  
};

window.addEventListener('load', priceSlider);



