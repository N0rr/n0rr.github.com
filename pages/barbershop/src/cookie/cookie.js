'use strict';

var browserCookies = require('browser-cookies');
var firstName = document.querySelector('.form-info__f-name');
var lastName = document.querySelector('.form-info__l-name');
var middleName = document.querySelector('.form-info__m-name');
var inputTel = document.querySelector('.form-info__tel');
var inputMail = document.querySelector('.form-info__mail');
var formContainer = document.querySelector('.form');
var beardCheckbox;

var LoadCookie = function() {
  this.checkCookie = this.checkCookie.bind(this);
  this.getCookie = this.getCookie.bind(this);  
  this.checkCookie();
  this.submitCookie();
};

LoadCookie.prototype.checkCookie = function() {  
  firstName.value = browserCookies.get('firstName') || '';
  lastName.value = browserCookies.get('lastName') || '';
  middleName.value = browserCookies.get('middleName') || '';
  inputTel.value = browserCookies.get('inputTel') || '';
  inputMail.value = browserCookies.get('inputMail') || '';
  beardCheckbox = browserCookies.get('beardCheckbox') || 1;
  document.querySelector('#beard-' + beardCheckbox).checked = true;
};

LoadCookie.prototype.submitCookie = function() {  
  formContainer.addEventListener('submit', this.getCookie);  
};

LoadCookie.prototype.getCookie = function(evt) {
  evt.preventDefault();  
  beardCheckbox = document.querySelector('input[name=beard]:checked');  
  browserCookies.set('firstName', firstName.value, {expires: 365});
  browserCookies.set('lastName', lastName.value, {expires: 365});
  browserCookies.set('middleName', middleName.value, {expires: 365});
  browserCookies.set('inputTel', inputTel.value, {expires: 365});
  browserCookies.set('inputMail', inputMail.value, {expires: 365});
  browserCookies.set('beardCheckbox', beardCheckbox.value, {expires: 365});
  formContainer.submit();
};

module.exports = new LoadCookie();
