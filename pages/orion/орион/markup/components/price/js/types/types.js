'use strict';

var itemsBLock = document.querySelector('.price__items-block');
var typeBlock = document.querySelector('.price__items-type');
var typeInputs = document.querySelectorAll('.price__type-input');
var priceItems = document.querySelectorAll('.price__item-block');
var priceSelect = document.querySelector('.select');
var priceOption = document.querySelector('.price__more-option');
var priceLabels = document.querySelectorAll('.price__type-checkbox');
var justAsp = document.querySelector('.price__type-input--just-asp');
var justAspValue = document.querySelector('.price__input-just-asp');
var his = document.querySelector('.price__type-input--his');
var hisValue = document.querySelectorAll('.price__value-number');



var reserveBlock = 'price__item--active';
var mainBLock = 'price__item-block--active';
var labelActive = 'price__type-checkbox--active'


var Types = function() {  
  this.hideBlock = this.hideBlock.bind(this);  
  this.showBlock = this.showBlock.bind(this);  
  this.start = this.start.bind(this);
};

Types.prototype.start = function() { 
  typeBlock.addEventListener('click', this.showBlock);
  typeBlock.addEventListener('click', this.checkActive);
  window.addEventListener('load', this.showBlock);  
  window.addEventListener('load', this.checkActive); 
};

Types.prototype.removeActive = function(_items, _cls) {
  Array.prototype.forEach.call(_items, function(item) {
    item.classList.remove(_cls);    
  });
};

Types.prototype.addActive = function() {
  Array.prototype.forEach.call(typeInputs, function(item, i) {    
    if (item.checked) {      
      priceItems[i].classList.add(mainBLock);
      priceItems[i].classList.add(reserveBlock);   
      priceLabels[i].classList.add(labelActive);
    } 
  });
};

Types.prototype.showBlock = function(evt) {
  itemsBLock.removeEventListener('animationend', this.hideBlock);
  if (evt.target.checked) {    
    this.checkInputs(evt);
    if (itemsBLock.classList.contains('price__items-anim')) {
      itemsBLock.classList.remove('price__items-anim');
    } else {
      itemsBLock.classList.add('price__items-anim');
    }
    this.removeActive(priceItems, mainBLock);
    this.removeActive(priceLabels, labelActive);
    itemsBLock.addEventListener('animationend', this.hideBlock);
    this.addActive(); 
  }  
};

Types.prototype.hideBlock = function() {
  var mainActive = document.querySelector('.price__item-block--active');
  Array.prototype.forEach.call(priceItems, function(item) {    
    item.classList.remove('price__item--active');
    if (mainActive) {
      mainActive.classList.add('price__item--active');
    }    
  }); 
};

Types.prototype.checkActive = function() {
  var checkActive = document.querySelector('.price__type > input:checked');
  Array.prototype.forEach.call(typeInputs, function(item) {
    if (checkActive) {      
      priceSelect.style.display = 'none';
      priceOption.style.display = 'flex';        
    } else {
      priceOption.style.display = 'none';
      priceSelect.style.display = 'block';   
    }
  });
};
    
Types.prototype.checkInputs = function(evt) {  
  Array.prototype.forEach.call(hisValue, function(item) {
    if (evt.target.contains(justAsp)) {
      justAspValue.disabled = false;
      item.disabled = true;
    } else if (evt.target.contains(his)) {        
      item.disabled = false;  
      justAspValue.disabled = true;
    } else {
      justAspValue.disabled = true;
      item.disabled = true;
    }
  });
};


export default new Types();