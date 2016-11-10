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