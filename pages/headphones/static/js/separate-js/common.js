'use strict';

var btnMenu = document.querySelector('.header__menu-btn');
var menuList = document.querySelector('.header__menu');
var menuInfo = document.querySelector('.header__callback');
var btnLine = document.querySelector('.header__menu-btn-line');
var btnLine2 = document.querySelector('.header__menu-btn-line2');
var btnLine3 = document.querySelector('.header__menu-btn-line3');
var btnLineActive = 'header__menu-btn-line--active';
var btnLineActive2 = 'header__menu-btn-line2--active';
var btnLineActive3 = 'header__menu-btn-line3--active';    
var menuOpen = 'header__menu-open';  


var closeHeadMenu = function() {
  menuList.classList.remove(menuOpen); 
  menuInfo.classList.remove(menuOpen); 
  btnLine.classList.remove(btnLineActive);
  btnLine2.classList.remove(btnLineActive2);
  btnLine3.classList.remove(btnLineActive3);
};

var openHeadMenu = function() {
  menuList.classList.add(menuOpen); 
  menuInfo.classList.add(menuOpen); 
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


// header vars
var headerBtnCallBack = document.querySelector('.header__cb-btn');
var headerForm = document.querySelector('.header__form');
var headerCloseFormBtn = document.querySelector('.header__close-btn');
var headerFormWrap = document.querySelector('.header__form-wrap');
// footer vars
var footerBtnCallBack = document.querySelector('.footer__link');

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
  headerForm.classList.remove('form-cb__form-hide');     
};

// open form
var headCallBack = function(evt) {
  evt.preventDefault();
  if (window.innerWidth < 768) {
    closeHeadMenu();
  }
  headerForm.classList.add(formOpen);  
  form.classList.add('form-cb__form-hide');
  headerFormWrap.classList.add('form-cb__form-wrap-show');
  form.removeEventListener('animationend', hideHeadForm);
};

headerBtnCallBack.addEventListener('click', headCallBack);
footerBtnCallBack.addEventListener('click', headCallBack);
headerCloseFormBtn.addEventListener('click', closeHeadForm);
window.addEventListener('keydown', escCloseHeadForm);


///// ty window

//ty vars
var tyWindow = document.querySelector('.form-ty');
var closeTyWindowBtn = document.querySelector('.form-ty__close');
var openTyWindow = 'forn-ty__open';

// callback vars
var callBackSubmitBtn = document.querySelector('.callback__submit');

// show ty window
var showTyWindow = function() {
  tyWindow.classList.add(openTyWindow);
};

// close ty window
var closeTyWindow = function() {
  tyWindow.classList.remove(openTyWindow);
};

// esc close ty window
var escCloseTyWindow = function(evt) {
  if (evt.keyCode === 27) {
    tyWindow.classList.remove(openTyWindow);
  }
};

//callBackSubmitBtn.addEventListener('submit', showTyWindow);


///// catalog popup

// catalog vars
var catalogItems = document.querySelector('.catalog__items');
var catalogForm = document.querySelector('.catalog__form');
var catalogAllForm = document.querySelectorAll('.catalog__form');
var catalogFormWrap = document.querySelector('.catalog__form-wrap');
var catalogItemsAnim = 'catalog__items--animation';

// show catalog form
var showCatalogForm = function(evt) {    
  checkCurrentCatalogForm(evt);
  showCatalogFormWithAnim(evt);  
  if (catalogItems.classList.contains(catalogItemsAnim)) {
    catalogItems.classList.remove(catalogItemsAnim);
  } else {
    catalogItems.classList.add(catalogItemsAnim);
  }    
};

var hideCatalogForm = function() {
  Array.prototype.forEach.call(catalogAllForm, function(item, i) {
    catalogAllForm[i].classList.remove(formOpen);    
  });    
};

var closeCatalogForm = function(evt) {
  if (evt.target.classList.contains('catalog__close-btn') || evt.keyCode === 27) {
    hideCatalogForm();        
    catalogItems.addEventListener('animationend', closeReserveBlock);    
    var catalogFormWrapShow = document.querySelector('.form-cb__form-wrap-show');
    catalogFormWrapShow.classList.remove('form-cb__form-wrap-show');
  }   
};


// remove reserve block
var closeReserveBlock = function() {
  Array.prototype.forEach.call(catalogAllForm, function(item, i) {
    item.classList.remove('form-cb__form-hide');    
  });  
};

var checkCurrentCatalogForm = function(evt) {
  if (evt.target.id && !evt.target.classList.contains(formOpen)) {    
    evt.preventDefault();
    var currentFormNumber = evt.target.id.slice(-1);
    Array.prototype.forEach.call(catalogAllForm, function(item, i) {      
      if ((i + 1) == currentFormNumber) {
        catalogAllForm[i].classList.add(formOpen);
      }
    });
  }
};

var showCatalogFormWithAnim = function(evt) {
  if (evt.target.id && !evt.target.classList.contains(formOpen)) {  
    evt.preventDefault();
    catalogItems.removeEventListener('animationend', closeReserveBlock);
    var currentFormNumber = evt.target.id.slice(-1);
    Array.prototype.forEach.call(catalogAllForm, function(item, i) {      
      if ((i + 1) == currentFormNumber) {
        catalogAllForm[i].classList.add('form-cb__form-hide');
        var currentFormWrap = catalogAllForm[i].querySelector('.catalog__form-wrap');
        currentFormWrap.classList.add('form-cb__form-wrap-show');              
      }
    });
  }
};

catalogItems.addEventListener('click', closeCatalogForm);
catalogItems.addEventListener('click', showCatalogForm);
window.addEventListener('keydown', closeCatalogForm);


//sliders


var saveItemAll = document.querySelectorAll('.save__item');
var saveItems = document.querySelector('.save__items');
var saveOwlContainer;
var saveID = document.getElementById('save__slider');
var saveDots = document.querySelector('.save__indicators');

var saveSlider = function() {    
  var itemD = saveItemAll;
  var itemsD = saveItems; 
  var id = saveID;  
  var removeSlider = saveID.querySelector('.owl-stage-outer');  
  
  if (itemsD.classList.contains('slider__carousel')) {   
    saveOwlContainer = removeSlider;       
  }
  
  if (window.innerWidth < 768) {    
    if (!itemsD.classList.contains('slider__carousel')) { 
      itemsD.classList.add('slider__carousel');
      itemsD.classList.add('owl-theme');
      itemsD.classList.add('owl-loaded');
      itemsD.classList.add('owl-carousel');                        
      if (saveOwlContainer != null) {        
        itemsD.appendChild(saveOwlContainer);  
        var owlItem = id.querySelectorAll('.owl-item'); 
        for (var i=0; i < itemD.length; i++) {
          owlItem[i].appendChild(itemD[i]);          
        } 
        saveDots.style.display= 'flex';
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
          dotsContainer: '.save__indicators',
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
      saveDots.style.display= 'none';
      Array.prototype.forEach.call(itemD, function(item) {
        itemsD.appendChild(item);
    });    
  }
};

window.addEventListener('load', saveSlider);
window.addEventListener('resize', saveSlider);

var advgItemAll = document.querySelectorAll('.advgs__item');
var advgItems = document.querySelector('.advgs__items');
var advgOwlContainer;
var advgID = document.getElementById('advgs__slider');

var advgsSlider = function() {    
  var itemD = advgItemAll;
  var itemsD = advgItems; 
  var id = advgID;  
  var owlContainer = advgOwlContainer;
  var removeSlider = id.querySelector('.owl-stage-outer');  
  var advgsDots = document.querySelector('.advg__indicators');
  
  if (itemsD.classList.contains('slider__carousel')) {   
    advgOwlContainer = removeSlider;   
    
  }
  
  if (window.innerWidth < 768) {    
    if (!itemsD.classList.contains('slider__carousel')) { 
      itemsD.classList.add('slider__carousel');
      itemsD.classList.add('owl-theme');
      itemsD.classList.add('owl-loaded');
      itemsD.classList.add('owl-carousel');   
      advgsDots.style.display= 'flex';
      if (owlContainer != null) {        
        itemsD.appendChild(owlContainer);  
        var owlItem = id.querySelectorAll('.owl-item'); 
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
          dotsContainer: '.advg__indicators',
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
      advgsDots.style.display= 'none';
      Array.prototype.forEach.call(itemD, function(item) {
        itemsD.appendChild(item);
    });    
  }
};

window.addEventListener('load', advgsSlider);
window.addEventListener('resize', advgsSlider);

var reviewsItems;
var reviewsSlider = function() {
  $(".reviews__prev").click(function () {
  owl.trigger("prev.owl");
    });
  $(".reviews__next").click(function () {
    owl.trigger("next.owl");
  }); 
  if (window.innerWidth < 768) {
    reviewsItems = 1;
  } else {
    reviewsItems = 3;
  }

  var owl = $(".reviews__items");      
  $(document).ready(function () {  
    owl.owlCarousel({
      items: reviewsItems,
      margin: 0,
      pagination: false,    
      dotsContainer: '.advgs__indicators',
      pullDrag: true,
      mouseDrag: true,
      loop: true
    });       
  });
};

window.addEventListener('load', reviewsSlider);
window.addEventListener('resize', reviewsSlider);








































