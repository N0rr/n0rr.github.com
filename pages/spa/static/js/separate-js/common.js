'use strict';

// Popup

// Form vars
var form = document.querySelector('.form-cb__form');
var formOpen = 'form-cb__form-open';


// btn vars
var moneyOpenForm = document.querySelector('.money__open-form');
var whyOpenForm = document.querySelector('.why__open-form');
var lifeOpenForm = document.querySelector('.life__open-form');

// form vars
var headerForm = document.querySelector('.header__form');
var headerCloseFormBtn = document.querySelector('.header__close-btn');
var headerFormWrap = document.querySelector('.header__form-wrap');

// open form
var headCallBack = function(evt) {
  evt.preventDefault();  
  form.classList.add(formOpen);  
  form.classList.add('form-cb__form-hide');
  headerFormWrap.classList.add('form-cb__form-wrap-show');
  form.removeEventListener('animationend', hideHeadForm);
};
// close form
var closeHeadForm = function(currentForm) { 
  form.classList.remove(formOpen);
  headerFormWrap.classList.remove('form-cb__form-wrap-show');
  form.addEventListener('animationend', hideHeadForm);    
};
// close form esc
var escCloseHeadForm = function(evt) {
  if (evt.keyCode === 27) {
    closeHeadForm();
  }
};
// remove reserve block
var hideHeadForm = function() {  
  form.classList.remove('form-cb__form-hide');     
};

moneyOpenForm.addEventListener('click', headCallBack);
whyOpenForm.addEventListener('click', headCallBack);
lifeOpenForm.addEventListener('click', headCallBack);
headerCloseFormBtn.addEventListener('click', closeHeadForm);
window.addEventListener('keydown', escCloseHeadForm);


///// ty window

//ty vars
var tyWindow = document.querySelector('.form-ty');
var tyWindowWrap = document.querySelector('.form-ty__wrap');
var closeTyWindowBtn = document.querySelector('.form-ty__close');
var openTyWindow = 'form-ty__open';

// callback vars
var requestForm = document.querySelector('.request__form');

// show ty window
var showTyWindow = function(evt) {  
  evt.preventDefault();
  tyWindow.classList.add(openTyWindow);
  tyWindow.classList.add('ty__form-hide');
  tyWindowWrap.classList.add('ty__form-wrap-show');
  tyWindow.removeEventListener('animationend', hideTy);
};

// close ty window
var closeTyWindow = function() {
  tyWindow.classList.remove(openTyWindow);
  tyWindowWrap.classList.remove('ty__form-wrap-show');
  tyWindow.addEventListener('animationend', hideTy); 
};

// esc close ty window
var escCloseTyWindow = function(evt) {
  if (evt.keyCode === 27) {
    closeTyWindow();
  }
};
// ty window reserve block
var hideTy = function() {    
  tyWindow.classList.remove('ty__form-hide');     
};

//requestForm.addEventListener('submit', showTyWindow);
closeTyWindowBtn.addEventListener('click', closeTyWindow);
window.addEventListener('keydown', closeTyWindow);

// Слайдеры

var sliderOneItemAll = document.querySelectorAll('.why__item');
var sliderOneItems = document.querySelector('.why__items');
var sliderOneOwlContainer;
var sliderOneId = document.getElementById('why__slider');
var sliderOneDots = document.querySelector('.why__indicators');

var whySlider = function() {    
  var itemD = sliderOneItemAll;
  var itemsD = sliderOneItems; 
  var id = sliderOneId;
  var removeSlider = id.querySelector('.owl-stage-outer');  
  var dots = sliderOneDots;  
  
  if (itemsD.classList.contains('slider__carousel')) {   
    sliderOneOwlContainer = removeSlider;       
  }
  
  slider(itemsD, itemD, id, sliderOneOwlContainer, dots);
};

window.addEventListener('load', whySlider);
window.addEventListener('resize', whySlider);


var sliderTwoItemAll = document.querySelectorAll('.reviews__item');
var sliderTwoItems = document.querySelector('.reviews__items');
var sliderTwoOwlContainer;
var sliderTwoId = document.getElementById('reviews__slider');
var sliderTwoDots = document.querySelector('.reviews__indicators');

var reviewsSlider = function() {    
  var itemD = sliderTwoItemAll;
  var itemsD = sliderTwoItems;
  var id = sliderTwoId;
  var removeSlider = id.querySelector('.owl-stage-outer'); 
  var dots = sliderTwoDots;
  
  if (itemsD.classList.contains('slider__carousel')) {   
    sliderTwoOwlContainer = removeSlider;       
  } 
  slider(itemsD, itemD, id, sliderTwoOwlContainer, dots);  
};

window.addEventListener('load', reviewsSlider);
window.addEventListener('resize', reviewsSlider);


var sliderThreeItemAll = document.querySelectorAll('.we-love__item');
var sliderThreeItems = document.querySelector('.we-love__items');
var sliderThreeOwlContainer;
var sliderThreeId = document.getElementById('we-love__slider');
var sliderThreeDots = document.querySelector('.we-love__indicators');

var weLoveSlider = function() {
  var itemD = sliderThreeItemAll;
  var itemsD = sliderThreeItems;
  var id = sliderThreeId;
  var removeSlider = id.querySelector('.owl-stage-outer'); 
  var dots = sliderThreeDots;
  var width = true;
  
  if (itemsD.classList.contains('slider__carousel')) {   
    sliderThreeOwlContainer = removeSlider;       
  } 
  slider(itemsD, itemD, id, sliderThreeOwlContainer, dots);  
};

window.addEventListener('load', weLoveSlider);
window.addEventListener('resize', weLoveSlider);

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
