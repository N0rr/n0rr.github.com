'use strict';

var windowsItemAll = document.querySelectorAll('.windows-disc__item');
var windowsItems = document.querySelector('.windows-disc__items');
var windowsOwlContainer;
var windowsId = document.getElementById('windows-disc__slider');
var windowsDots = document.querySelector('.windows-disc__indicators');
var windowsHideBtn = document.querySelector('.windows-disc__item-mob');

var windowSlider = function() {    
  var itemD = windowsItemAll;
  var itemsD = windowsItems; 
  var id = windowsId;
  var removeSlider = id.querySelector('.owl-stage-outer');
  var hideBtn = windowsHideBtn;
  var dots = windowsDots;  
  var width = true;
  if (window.innerWidth < 960) {    
    if (hideBtn.classList.contains('windows-disc__item')) {
      itemsD.removeChild(hideBtn);
      hideBtn.classList.remove('windows-disc__item');
    }   
  } else {    
    itemsD.appendChild(hideBtn);
    hideBtn.classList.add('windows-disc__item');
  } 
  
  if (itemsD.classList.contains('slider__carousel')) {   
    windowsOwlContainer = removeSlider;       
  }
  
  slider(itemsD, itemD, id, windowsOwlContainer, dots, width);
};

window.addEventListener('load', windowSlider);
window.addEventListener('resize', windowSlider);

var advgItemAll = document.querySelectorAll('.advg-item');
var advgItems = document.querySelector('.advg__items');
var advgOwlContainer;
var advgId = document.getElementById('advg__slider');
var advgDots = document.querySelector('.advg__indicators');

var advgSlider = function() {    
  var itemD = advgItemAll;
  var itemsD = advgItems; 
  var id = advgId;
  var removeSlider = id.querySelector('.owl-stage-outer'); 
  var dots = advgDots;
  
  if (itemsD.classList.contains('slider__carousel')) {   
    advgOwlContainer = removeSlider;       
  } 
  slider(itemsD, itemD, id, advgOwlContainer, dots);  
};

window.addEventListener('load', advgSlider);
window.addEventListener('resize', advgSlider);

var optionItemAll = document.querySelectorAll('.option__item');
var optionItems = document.querySelector('.option__items');
var optionOwlContainer;
var optionId = document.getElementById('option__slider');
var optionDots = document.querySelector('.option__indicators');

var advgSlider = function() {    
  var itemD = optionItemAll;
  var itemsD = optionItems; 
  var id = optionId;
  var removeSlider = id.querySelector('.owl-stage-outer'); 
  var dots = optionDots;
  
  if (itemsD.classList.contains('slider__carousel')) {   
    optionOwlContainer = removeSlider;       
  } 
  slider(itemsD, itemD, id, optionOwlContainer, dots);  
};

window.addEventListener('load', advgSlider);
window.addEventListener('resize', advgSlider);

var slider = function(itemsD, itemD, id, _container, dots, _width, _prev, _next) {  
  var windowWidth = 768;
  if (_width) {
    windowWidth = 960;  
  } 
  if (window.innerWidth < windowWidth) {    
    if (!itemsD.classList.contains('slider__carousel')) { 
      itemsD.classList.add('slider__carousel');
      itemsD.classList.add('owl-theme');
      itemsD.classList.add('owl-loaded');
      itemsD.classList.add('owl-carousel'); 
      dots.classList.remove('indicators-hide');
      dots.style.display= 'flex';
      if (_container != null) {        
        itemsD.appendChild(_container);        
        var owlItem = id.querySelectorAll('.owl-item');        
        for (var i=0; i < itemD.length; i++) {
          owlItem[i].appendChild(itemD[i]);          
        }        
      }      
      $(_prev).click(function () {
      owl.trigger("prev.owl");
        });
      $(_next).click(function () {
        owl.trigger("next.owl");
      }); 
     
      var owl = $(".slider__carousel");      
      $(document).ready(function () {  
        owl.owlCarousel({
          items: 1,
          margin: 0,
          pagination: false,    
          dotsContainer: dots,
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
      dots.classList.add('indicators-hide');
      dots.style.display= 'none';
      itemsD.removeChild(_container);      
      Array.prototype.forEach.call(itemD, function(item) {
        itemsD.appendChild(item);
    });    
  }
};
