'use strict';

$(".fancybox-button").fancybox({
		prevEffect		: 'none',
		nextEffect		: 'none',
		closeBtn		: true,
    helpers: {
      overlay: {
          locked: false
      }
    }		
});

// menu

var btnMenu = document.querySelector('.header__menu-btn');
var menuList = document.querySelector('.header__menu');
var btnLine = document.querySelector('.header__menu-btn-line');
var btnLine2 = document.querySelector('.header__menu-btn-line2');
var btnLine3 = document.querySelector('.header__menu-btn-line3');
var btnLineActive = 'header__menu-btn-line--active';
var btnLineActive2 = 'header__menu-btn-line2--active';
var btnLineActive3 = 'header__menu-btn-line3--active';    
var menuOpen = 'header__menu-open';  


var closeHeadMenu = function() {
  menuList.classList.remove(menuOpen);   
  btnLine.classList.remove(btnLineActive);
  btnLine2.classList.remove(btnLineActive2);
  btnLine3.classList.remove(btnLineActive3);
};

var openHeadMenu = function() {
  menuList.classList.add(menuOpen);   
  btnLine.classList.add(btnLineActive);
  btnLine2.classList.add(btnLineActive2);
  btnLine3.classList.add(btnLineActive3);
};

var checkMenu = function() {  
  if (!menuList.classList.contains(menuOpen)) {    
    openHeadMenu();
  } else {
    closeHeadMenu();
  }  
}

var checkSize = function() {
  if (window.innerWidth > 767) {
    openHeadMenu();
  } else if (window.innerWidth < 767) {
    closeHeadMenu();
  }
}

btnMenu.addEventListener('click', checkMenu);
window.addEventListener('load', checkSize);
window.addEventListener('resize', checkSize);

// Popup

// Form vars
var form = document.querySelector('.form-cb__form');
var formOpen = 'form-cb__form-open';


// btn vars
var headerOpenForm = document.querySelector('.header__open-form');
var headerOpenFormMobile = document.querySelector('.header__open-form-mobile');
var footerOpenForm = document.querySelector('.footer__open-form');


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
  closeHeadMenu();
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

headerOpenForm.addEventListener('click', headCallBack);
headerOpenFormMobile.addEventListener('click', headCallBack);
footerOpenForm.addEventListener('click', headCallBack);
headerCloseFormBtn.addEventListener('click', closeHeadForm);
window.addEventListener('keydown', escCloseHeadForm);


// Слайдеры

var sliderOneItemAll = document.querySelectorAll('.work-with__item');
var sliderOneItems = document.querySelector('.work-with__items');
var sliderOneOwlContainer;
var sliderOneId = document.getElementById('work-with__slider');
var sliderOneDots = document.querySelector('.work-with__dots');

var workWithSlider = function() {    
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

window.addEventListener('load', workWithSlider);
window.addEventListener('resize', workWithSlider);


var sliderTwoItemAll = document.querySelectorAll('.materials-item-macadam');
var sliderTwoItems = document.querySelector('.materials__macadam');
var sliderTwoOwlContainer;
var sliderTwoId = document.getElementById('materials__macadam');
var sliderTwoDots = document.querySelector('.materials__dots-macadam');

var macadamSlider = function() {    
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

window.addEventListener('load', macadamSlider);
window.addEventListener('resize', macadamSlider);


var sliderThreeItemAll = document.querySelectorAll('.materials-item-sand');
var sliderThreeItems = document.getElementById('materials__sand');
var sliderThreeOwlContainer;
var sliderThreeId = document.getElementById('materials__sand');
var sliderThreeDots = document.querySelector('.materials__dots-sand');

var sandSlider = function() {
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

window.addEventListener('load', sandSlider);
window.addEventListener('resize', sandSlider);


var slider4ItemAll = document.querySelectorAll('.materials-item-stone');
var slider4Items = document.getElementById('materials__stone');
var slider4OwlContainer;
var slider4Id = document.getElementById('materials__stone');
var slider4Dots = document.querySelector('.materials__dots-stone');

var stoneSlider = function() {
  var itemD = slider4ItemAll;
  var itemsD = slider4Items;
  var id = slider4Id;
  var removeSlider = id.querySelector('.owl-stage-outer'); 
  var dots = slider4Dots;
  var width = true;
  
  if (itemsD.classList.contains('slider__carousel')) {   
    slider4OwlContainer = removeSlider;       
  } 
  slider(itemsD, itemD, id, slider4OwlContainer, dots);  
};

window.addEventListener('load', stoneSlider);
window.addEventListener('resize', stoneSlider);


var slider5ItemAll = document.querySelectorAll('.spec__item');
var slider5Items = document.getElementById('spec__slider');
var slider5OwlContainer;
var slider5Id = document.getElementById('spec__slider');
var slider5Dots = document.querySelector('.spec__dots');

var specSlider = function() {
  var itemD = slider5ItemAll;
  var itemsD = slider5Items;
  var id = slider5Id;
  var removeSlider = id.querySelector('.owl-stage-outer'); 
  var dots = slider5Dots;
  var width = true;
  
  if (itemsD.classList.contains('slider__carousel')) {   
    slider5OwlContainer = removeSlider;       
  } 
  slider(itemsD, itemD, id, slider5OwlContainer, dots);  
};

window.addEventListener('load', specSlider);
window.addEventListener('resize', specSlider);


var slider6Dots = document.querySelector('.certificate__dots');

var certSlider = function() {
  $('.certificate__prev').click(function () {
    owl.trigger("prev.owl");
      });
  $('.certificate__next').click(function () {
    owl.trigger("next.owl");
  });  
  
  if (window.innerWidth > 767) {
    slider6Dots.classList.add('indicators-hide');
  } else {
    slider6Dots.classList.remove('indicators-hide');
    slider6Dots.style.display = 'flex';
  }

  var owl = $(".certificate__items");      
  $(document).ready(function () {  
    owl.owlCarousel({      
      margin: 0,
      pagination: false,    
      dotsContainer: slider6Dots,
      pullDrag: true,
      mouseDrag: true,      
      responsive: {
        0: {
          items: 1          
        },
        768: {
          items: 3         
        },
        1200: {
          items: 5
        }
      }      
    });       
  });  
};

window.addEventListener('load', certSlider);
window.addEventListener('resize', certSlider);

var slider = function(itemsD, itemD, id, _container, dots, _width, _prev, _next, _items) {  
  var windowWidth = 768;
  if (_width) {
    windowWidth = 960;  
  }
  var items = 1;
  if (_items && window.innerWidth > 768) {
    var items = 5;
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
          items: items,
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
