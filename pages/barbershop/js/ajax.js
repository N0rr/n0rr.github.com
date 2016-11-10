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
	__webpack_require__(5);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var renderReview = __webpack_require__(2);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utilities = __webpack_require__(3);

	var reviewsDataUrl = '//n0rr.github.io/json/review.json';
	var reviewContainer = document.querySelector('.reviews__items');

	var renderedReviews = [];

	var Review = __webpack_require__(4);

	var ReviewLoad = function() {  
	  this.reviewCallback = this.reviewCallback.bind(this);  
	  utilities.getDataAjax(this.reviewCallback, reviewsDataUrl);  
	};

	ReviewLoad.prototype.reviewCallback = function(error, loadedData) {
	  reviewContainer.innerHTML = '';
	  if (error) {
	    reviewContainer.classList.add('fail');
	  } else {    
	    this.reviews = loadedData;
	    renderedReviews = this.reviews;    
	    this.renderReviews(renderedReviews);    
	  }  
	  var reviewOwlStage = document.querySelectorAll('.owl-stage');  
	  var reviewsOwlDel = document.querySelectorAll('.reviews__owl-del');  
	  if (reviewOwlStage != undefined) {
	    reviewContainer = reviewOwlStage[1];   
	  }
	};

	ReviewLoad.prototype.renderReviews = function(rene) {  
	  rene.forEach(function(item) {
	    renderedReviews.push(new Review(item, reviewContainer));   
	  }); 
	};

	module.exports = new ReviewLoad();


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	  /*ajax*/

	  getDataAjax: function getDataAjax(callback, url) {
	    var xhr = new XMLHttpRequest();
	    
	    xhr.addEventListener('load', function(evt) {      
	      var loadedData = JSON.parse(evt.target.response);
	      callback(null, loadedData);      
	    });

	    xhr.addEventListener('error', function() {
	      callback(true);
	    });

	    xhr.timeout = 10000;
	    xhr.addEventListener('timeout', function() {
	      callback(true);
	    });

	    xhr.open('GET', url);
	    xhr.send();
	  },

	  /*Проверка элемента на видимость в окне*/

	  iSeeYou: function iSeeYou(block) {
	    return block.getBoundingClientRect().bottom >= 0;
	  },

	  /*Создать новое изображение*/

	  createNewImage: function createNewImage(imageURL, callback) {
	    var timeOut = 10000;

	    var image = new Image();
	    var imageLoadTimeOut;

	    image.addEventListener('load', function() {
	      clearTimeout(imageLoadTimeOut);
	      callback();
	    });

	    image.addEventListener('error', function() {
	      callback(true);
	    });

	    imageLoadTimeOut = setTimeout(function() {
	      callback(true);
	      image.src = '';
	    }, timeOut);

	    image.src = imageURL;
	  }
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utilities = __webpack_require__(3);

	var templateReview = document.querySelector('#review-template');
	var reviewClone;

	if ('content' in templateReview) {
	  reviewClone = templateReview.content.querySelector('.owl-item');
	} else {
	  reviewClone = templateReview.querySelector('.owl-item');
	}

	var Review = function(data, container) {
	  this.data = data;
	  this.element = this.getReview(this.data, container);
	};

	Review.prototype.getReview = function(_data, _container) {
	  var clone = reviewClone.cloneNode(true);
	  
	  var avatarDesk = clone.querySelector('.reviews__img-desk');
	  var avatarTab = clone.querySelector('.reviews__img-tab');
	  var avatarMob = clone.querySelector('.reviews__img-mob');
	  
	  var reviewsAuthor = clone.querySelector('.reviews__author');
	  var reviewsText = clone.querySelector('.reviews__text');
	  
	  reviewsAuthor.textContent = _data.name;
	  reviewsText.textContent = _data.review;
	  
	  utilities.createNewImage(_data.imgMob, function(error) {
	    if (error) {
	      clone.classList.add('review-load-failure');
	    } else {      
	      avatarMob.src = _data.imgMob;
	      avatarDesk.srcset = _data.imgDesk;
	      avatarTab.srcset = _data.imgTab;
	    }
	  });
	  
	  var createFragment = document.createDocumentFragment();
	  createFragment.appendChild(clone);
	  _container.appendChild(createFragment);
	  
	  return clone;
	};

	module.exports = Review;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(6);

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	var showAllBtn = document.querySelector('.news__btn');
	var moreNews = document.querySelectorAll('.news__more-news');
	var newsInDesktop = document.querySelector('.news__show-only-desktop');

	var ShowMoreNews = function() {
	  this.showOnClick = this.showOnClick(this);
	};

	ShowMoreNews.prototype.showNews = function(evt) {
	  evt.preventDefault();
	  newsInDesktop.style.display = 'block';
	  Array.prototype.forEach.call(moreNews, function(item) {
	    item.style.display = 'block';
	  });
	  showAllBtn.style.display = 'none';
	};

	ShowMoreNews.prototype.showOnClick = function() {
	  showAllBtn.addEventListener('click', this.showNews);
	};

	module.exports = new ShowMoreNews();

/***/ }
/******/ ]);