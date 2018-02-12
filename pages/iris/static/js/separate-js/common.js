'use strict';

var checkWidth = function () {
  var clientsSliderItems;
  if (window.innerWidth < 768) {     
    clientsSliderItems = 1;
  } else {      
    clientsSliderItems = 4;
  }  
  $(".clients__prev").click(function () {
      owl.trigger("prev.owl");
    });
  $(".clients__next").click(function () {
    owl.trigger("next.owl");
  });
  var owl = $(".clients__slider-items");    
    owl.owlCarousel({        
      items: clientsSliderItems,
      margin: 0,
      pagination: false,    
      mouseDrag: true,
      pullDrag: true,    
      loop: true 
    });
};

window.addEventListener('load', checkWidth);
window.addEventListener('resize', checkWidth);

var btnMenu = document.querySelector('.header__menu-btn');
var menuList = document.querySelector('.header__items');
var btnLine = document.querySelector('.header__menu-btn-line');
var btnLine2 = document.querySelector('.header__menu-btn-line2');
var btnLine3 = document.querySelector('.header__menu-btn-line3');
var btnLineActive = 'header__menu-btn-line--active';
var btnLineActive2 = 'header__menu-btn-line2--active';
var btnLineActive3 = 'header__menu-btn-line3--active';
    
var menuOpen = 'header__menu-open';  


var checkMenu = function() {  
  if (!menuList.classList.contains(menuOpen)) {    
    menuList.classList.add(menuOpen);    
    btnLine.classList.add(btnLineActive);
    btnLine2.classList.add(btnLineActive2);
    btnLine3.classList.add(btnLineActive3);
  } else {
    menuList.classList.remove(menuOpen); 
    btnLine.classList.remove(btnLineActive);
    btnLine2.classList.remove(btnLineActive2);
    btnLine3.classList.remove(btnLineActive3);
  }  
}

var checkSize = function() {
  if (window.innerWidth > 767) {
    menuList.classList.add(menuOpen);
    btnLine.classList.add(btnLineActive);
    btnLine2.classList.add(btnLineActive2);
    btnLine3.classList.add(btnLineActive3);
  } else {
    menuList.classList.remove(menuOpen);
    btnLine.classList.remove(btnLineActive);
    btnLine2.classList.remove(btnLineActive2);
    btnLine3.classList.remove(btnLineActive3);
  }
}

btnMenu.addEventListener('click', checkMenu);
window.addEventListener('load', checkSize);
window.addEventListener('resize', checkSize);







