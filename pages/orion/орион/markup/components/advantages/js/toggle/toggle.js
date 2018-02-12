'use strict';

var toggleBtn = document.querySelector('.advg__toggle-arrow-block');
var advgItems = document.querySelector('.advg__items');
var advgIcons = document.querySelectorAll('.advg__item');
var advgArrow = document.querySelector('.advg__toggle-arrow');

var Toggle = function() {      
  this.activeToggle = this.activeToggle.bind(this);    
  this.animEndShow = this.animEndShow.bind(this); 
  this.start = this.start.bind(this);
};

Toggle.prototype.start = function() {
  window.addEventListener('load', this.activeToggle);
  toggleBtn.addEventListener('click', this.activeToggle);    
  window.addEventListener('load', this.activeToggle);
};

Toggle.prototype.activeToggle = function() {
    if (advgItems.classList.contains('advg__items-anim-show')) { 
      advgItems.classList.remove('advg__items-anim-show');
      Array.prototype.forEach.call(advgIcons, function(item) {
        item.classList.remove('advg__item-anim');
      });      
      advgArrow.classList.remove('advg__arrow-anim');
      advgItems.addEventListener('animationend', this.animEndShow);      
    } else {
        advgItems.classList.add('advg__items-anim-show');
        Array.prototype.forEach.call(advgIcons, function(item) {
          item.classList.add('advg__item-anim');   
          item.classList.add('advg__item-active');       
        });
      advgArrow.classList.add('advg__arrow-anim');
      advgItems.removeEventListener('animationend', this.animEndShow); 
    }
};

Toggle.prototype.animEndShow = function() {  
  Array.prototype.forEach.call(advgIcons, function(item) { 
    //if (!advgItems.classList.contains('advg__items-anim-show')) {
      item.classList.remove('advg__item-active');     
    //}    
  });  
};

export default new Toggle();