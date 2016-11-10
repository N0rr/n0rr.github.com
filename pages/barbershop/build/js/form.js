var name =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var form = __webpack_require__(2);

	window.addEventListener('load', form.formStart);

/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var cookie = __webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var browserCookies = __webpack_require__(5);
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


/***/ },
/* 5 */
/***/ function(module, exports) {

	exports.defaults = {};

	exports.set = function(name, value, options) {
	  // Retrieve options and defaults
	  var opts = options || {};
	  var defaults = exports.defaults;

	  // Apply default value for unspecified options
	  var expires  = opts.expires || defaults.expires;
	  var domain   = opts.domain  || defaults.domain;
	  var path     = opts.path     != undefined ? opts.path     : (defaults.path != undefined ? defaults.path : '/');
	  var secure   = opts.secure   != undefined ? opts.secure   : defaults.secure;
	  var httponly = opts.httponly != undefined ? opts.httponly : defaults.httponly;

	  // Determine cookie expiration date
	  // If succesful the result will be a valid Date, otherwise it will be an invalid Date or empty string
	  var expDate = expires == undefined ? '' :
	  // in case expires is an integer, it (should) specify the amount in days till the cookie expires
	  typeof expires == 'number' ? new Date(new Date().getTime() + (expires * 864e5)) :
	  // in case expires is (probably) a Date object
	  expires.getTime ? expires :
	  // in case expires is not in any of the above formats, try parsing as a format recognized by Date.parse()
	  new Date(expires);

	  // Set cookie
	  document.cookie = encodeURIComponent(name) + '=' +                          // Encode cookie name
	  value.replace(/[^#\$&\+/:<-\[\]-}]/g, encodeURIComponent) +                 // Encode cookie value (RFC6265)
	  (expDate && expDate.getTime() ? ';expires=' + expDate.toUTCString() : '') + // Add expiration date
	  (domain   ? ';domain=' + domain : '') +                                     // Add domain
	  (path     ? ';path='   + path   : '') +                                     // Add path
	  (secure   ? ';secure'           : '') +                                     // Add secure option
	  (httponly ? ';httponly'         : '');                                      // Add httponly option
	};

	exports.get = function(name) {
	  var cookies = document.cookie.split(';');

	  // Iterate all cookies
	  for(var i = 0; i < cookies.length; i++) {
	    var cookie = cookies[i];

	    // Determine separator index ("name=value")
	    var separatorIndex = cookie.indexOf('=');

	    // If a separator index is found, Decode the cookie name and compare to the requested cookie name
	    if (separatorIndex != -1 && decodeURIComponent(cookie.substring(0, separatorIndex).replace(/^\s+|\s+$/g,'')) == name) {
	      return decodeURIComponent(cookie.substring(separatorIndex + 1, cookie.length));
	    }
	  }

	  return null;
	};

	exports.erase = function(name, options) {
	  exports.set(name, '', {
	    expires:  -1,
	    domain:   options && options.domain,
	    path:     options && options.path,
	    secure:   false,
	    httponly: false}
	  );
	};


/***/ }
/******/ ]);