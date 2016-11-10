'use strict';

var dignityItems = document.querySelector('.dignity__items');
var dignityItem = document.querySelectorAll('.dignity__item');
var owlContainer;

var checkSlider = function() {    
  var itemD = dignityItem;
  var itemsD = dignityItems; 
  var removeSlider = document.querySelector('.owl-stage-outer');  
  
  if (itemsD.classList.contains('dignity__carousel')) {   
    owlContainer = removeSlider;       
  }
  
  if (window.innerWidth < 767) {    
    if (!dignityItems.classList.contains('dignity__carousel')) { 
      dignityItems.classList.add('dignity__carousel', 'owl-theme', 'owl-loaded', 'owl-carousel');  
      if (owlContainer != null) {
        dignityItems.appendChild(owlContainer);
        document.querySelector('.dignity__indicators').style.display = 'flex';
        var owlItem = document.querySelectorAll('.owl-item');
        
        for (var i=0; i < dignityItem.length; i++) {
          owlItem[i].appendChild(dignityItem[i]);
        } 
      }      
     
      var owl = $(".dignity__carousel");      
      $(document).ready(function () {  
        owl.owlCarousel({
          items: 1,
          margin: 0,
          pagination: false,    
          dotsContainer: '.dignity__indicators',
          pullDrag: true,
          mouseDrag: true,
          onInitialize: function (event) {
            if ($('.dignity__item').length > 1) {
              this.settings.loop = false;
            }
          }
        });       
      });
    }
  } else if (dignityItems.classList.contains('dignity__carousel')) {
    dignityItems.classList.remove('dignity__carousel', 'owl-carousel', 'owl-theme', 'owl-loaded'); 
    dignityItems.removeChild(removeSlider);                   
    Array.prototype.forEach.call(dignityItem, function(item) {
      dignityItems.appendChild(item);
    });    
  }
};

window.addEventListener('load', checkSlider);
window.addEventListener('resize', checkSlider);


// Reviews slider //


var reviewsSlider = function() {  
  
  $(document).ready(function () {
    $(".reviews__prev").click(function () {
        owl.trigger("prev.owl");
    });
    $(".reviews__next").click(function () {
        owl.trigger("next.owl");
    });

    var owl = $(".reviews__items--carousel");
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

window.addEventListener('load', reviewsSlider);
