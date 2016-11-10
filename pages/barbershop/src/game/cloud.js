'use strict';

module.exports = {
  moveClouds: function moveClouds() {
    var utilities = require('../utilities');

    document.querySelector('.header-clouds').style.backgroundPosition = 0;

    var trigger = true;

    var headerClouds = document.querySelector('.header-clouds');
    var headerContainer = document.querySelector('header');

    window.addEventListener('scroll', function() {

      var headerPosition = headerContainer.getBoundingClientRect();
      var headerTop = headerPosition.top;
      var HeaderVisibility = utilities.iSeeYou(headerClouds);

      if (trigger) {
        setTimeout(function() {
          trigger = true;
        }, 100);

        trigger = false;
        if (HeaderVisibility) {
          headerClouds.style.backgroundPosition = headerTop + 'px';
        } else {
          headerClouds.style.backgroundPosition = 0;
        }
      }
    });
  }
};
