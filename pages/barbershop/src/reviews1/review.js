'use strict';

var utilities = require('../utilities');

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