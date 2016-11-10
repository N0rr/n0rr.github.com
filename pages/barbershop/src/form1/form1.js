'use strict';

var lastName = document.querySelector('.form-info__l-name');
var firstName = document.querySelector('.form-info__f-name');
var middleName = document.querySelector('.form-info__m-name');
var inputTel = document.querySelector('.form-info__tel');
var inputMail = document.querySelector('.form-info__mail');
var submitBtn = document.querySelector('.more-services__btn');
var formInfo = document.querySelector('.form-info');
var formContainer = document.querySelector('.form');
var progressBar = document.querySelector('.form-info__progress-bar');
var successLine = document.querySelector('.form-info__success-line');
var successValue = document.querySelector('.form-info__success-info');

// number

var progressWidth = 0;

// Array

var progressArray = [];
var inputArray = [
  firstName,
  lastName,
  middleName,
  inputTel,
  inputMail
];

var FormCheck = function() {	
	this.enableSubmit = this.enableSubmit.bind(this);
	this.removeListener = this.removeListener.bind(this);
	this.checkFirstName = this.checkFirstName.bind(this);
	this.checkLastName = this.checkLastName.bind(this);
	this.checkMiddleName = this.checkMiddleName.bind(this);
	this.checkInputTel = this.checkInputTel.bind(this);
	this.checkInputMail = this.checkInputMail.bind(this);
  this.progressLine = this.progressLine.bind(this);
  this.getProgressArray = this.getProgressArray(this);
  this.checkRequired = this.checkRequired.bind(this);  
	this.checkForm = this.checkForm.bind(this);
	this.formStart = this.formStart(this);	
};

FormCheck.prototype.formStart = function() {	
	this.loadForm();
};

FormCheck.prototype.loadForm = function() {
	lastName.addEventListener('focus', this.enableSubmit);
	firstName.addEventListener('focus', this.enableSubmit);
	if (window.innerWidth > 767 && !firstName.validity.valid) {
		firstName.focus();
	}	else if (!lastName.validity.valid) {
		lastName.focus();
	}	else if (lastName.validity.valid && !middleName.validity.valid) {
		middleName.focus();
	}	else if (middleName.validity.valid && !inputTel.validity.valid) {
		inputTel.focus();
	}	else {
		submitBtn.focus();
	}
	window.addEventListener('load', this.checkForm);
  window.addEventListener('load', this.progressLine);
  window.addEventListener('load', this.enableSubmit);
	lastName.addEventListener('input', this.checkLastName);
	firstName.addEventListener('input', this.checkFirstName);
	middleName.addEventListener('input', this.checkMiddleName);
	inputTel.addEventListener('input', this.checkInputTel);
	inputMail.addEventListener('input', this.checkInputMail);  
  formInfo.addEventListener('input', this.progressLine); 
  submitBtn.addEventListener('click', this.checkRequired);  
};

FormCheck.prototype.getProgressArray = function() {
  progressArray = inputArray.map(function(item) {
    return item;
  });
  progressArray.fill(0);
};

FormCheck.prototype.checkRequired = function() {     
  if (inputTel.validity.valid) {
    inputTel.required = true;
    inputMail.required = false;
  } else if (inputMail.validity.valid) {
    inputMail.required = true;
    inputTel.required = false;
  }  
};

FormCheck.prototype.progressLine = function() {  
  inputArray.forEach(function(item,i) {
    progressWidth = progressArray.reduce(function(sum, current) {
      return sum + current
    });    
    
    if (item.validity.valid) {
      progressArray[i] = 25;
      if (!inputMail.validity.valid) {
        progressArray[4] = 0;
      } else if (inputMail.validity.valid) {
        progressArray[4] = 25;
      }
    } else if (submitBtn.disabled == true || !item.validity.valid) {
      progressArray[i] = 25 - 25;     
    }
    if (parseFloat(progressWidth) <= 100) {
      successLine.style.width = progressWidth + '%';
    }    
    successValue.textContent = progressWidth + '%';    
    if (progressWidth == 125) {
      successLine.style.boxShadow = '0px 0px 2px 2px rgba(50,50,50, 0.6)';
    } else {
      successLine.style.boxShadow = 'none';
    }
  });  
};

FormCheck.prototype.checkValid = function(_input, number) {
	if (_input.validity.valid) {
		_input.classList.remove('input-invalid');
		_input.classList.add('input-valid');
    progressBar.style.display = 'block';
	} else if (!_input.validity.valid) {     
		_input.classList.remove('input-valid');
		_input.classList.add('input-invalid');		
	}
};

FormCheck.prototype.enableSubmit = function() {  
  if (firstName.validity.valid && lastName.validity.valid && middleName.validity.valid && (inputTel.validity.valid || inputMail.validity.valid)) {
    submitBtn.disabled = false;		
  } else {
    submitBtn.disabled = true;
  }
};

FormCheck.prototype.checkForm = function() {	
	this.checkEmpty(firstName);
	this.checkEmpty(lastName);
	this.checkEmpty(middleName);
	this.checkEmpty(inputTel);
	this.checkEmpty(inputMail);	
};

FormCheck.prototype.checkEmpty = function(_input) {
	if (_input.value.length >= 1) {
		this.checkValid(_input);
	}
};

FormCheck.prototype.checkFirstName = function() {
	this.checkValid(firstName);
	this.enableSubmit();
};

FormCheck.prototype.checkLastName = function() {
	this.checkValid(lastName);
	this.enableSubmit();  
};

FormCheck.prototype.checkMiddleName = function() {
	this.checkValid(middleName);
	this.enableSubmit();  
};

FormCheck.prototype.checkInputTel = function() {
	this.checkValid(inputTel);
	this.enableSubmit();
};

FormCheck.prototype.checkInputMail = function() {
	this.checkValid(inputMail);
	this.enableSubmit();
};

FormCheck.prototype.removeListener = function(evt) {
	evt.preventDefault();
	firstName.removeEventListener('focus', this.enableSubmit);
	firstName.removeEventListener('input', this.enableSubmit);
};

module.exports = new FormCheck();
