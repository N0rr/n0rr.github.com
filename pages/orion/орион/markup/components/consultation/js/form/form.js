'use strict';

var nbrInput = document.querySelector('.cons__phone-input');
var nbrIcon = document.querySelector('.cons__icon--phone');
var nbrStatus = document.querySelector('.cons__phone-status');
var timeInput1 = document.querySelector('.cons__time-from-input');
var timeInput2 = document.querySelector('.cons__time-to-input');
var timeIcon = document.querySelector('.cons__icon--time');
var timeStatus = document.querySelector('.cons__time-status');
var submitForm = document.querySelector('.cons__form');
var submitBtn = document.querySelector('.cons__submit');
var nameInput = document.querySelector('.cons__full-name-input');
var nameIcon = document.querySelector('.cons__icon--full-name');
var nameStatus = document.querySelector('.cons__full-name');
// re

var nbrRe = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;


var valid = '#7cc15e';
var invalid = '#e27d65';

var Form = function() {  
  this.checkForm = this.checkForm.bind(this);
  this.checkNbr = this.checkNbr.bind(this);
  this.checkTime = this.checkTime.bind(this);
  this.checkValid = this.checkValid.bind(this);
  this.start = this.start.bind(this);
  this.eventListener = this.eventListener(this);
};

Form.prototype.start = function() {
  window.addEventListener('load', this.eventListener);
};

Form.prototype.eventListener = function() {  
  nameInput.addEventListener('input', this.checkValid);  
  window.addEventListener('load', this.checkValid);
  timeInput1.addEventListener('input', this.checkTime);
  timeInput2.addEventListener('input', this.checkTime);
  window.addEventListener('load', this.checkTime);
  submitForm.addEventListener('input', this.checkSubmit);
  nbrInput.addEventListener('input', this.checkNbr);
};

Form.prototype.checkNbr = function() {
  if (nbrInput.value.match(nbrRe)) {
    nbrIcon.style.background = valid;
    nbrStatus.style.color = valid;    
  } else {
    nbrIcon.style.background = invalid;
    nbrStatus.style.color = invalid;   
  }
  this.checkForm();
};

Form.prototype.checkValid = function() {    
  if (nameInput.value.length > 1) {
    nameIcon.style.background = valid;   
    nameStatus.style.color = valid;
  } else {
    nameIcon.style.background = invalid;
    nameStatus.style.color = invalid;
  }
  this.checkForm();
};

Form.prototype.checkForm = function() {  
  if (nbrInput.value.match(nbrRe) && nameInput.value.length > 1 && (timeInput1.checked || timeInput2.checked)) {
    submitBtn.style.background = valid;
  } else {
    submitBtn.style.background = invalid;
  }
};

Form.prototype.checkTime = function() {
  if (timeInput1.checked || timeInput2.checked) {
    timeIcon.style.background = valid;
    timeStatus.style.color = valid;
  } 
  this.checkForm();
};

export default new Form();
