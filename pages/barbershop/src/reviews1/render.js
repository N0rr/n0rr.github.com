'use strict';

var utilities = require('../utilities');

var reviewsDataUrl = '//n0rr.github.io/json/review.json';
var reviewContainer = document.querySelector('.reviews__items');

var renderedReviews = [];

var Review = require('./review');

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
