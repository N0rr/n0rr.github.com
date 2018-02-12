'use strict';

$(document).ready(function () {
  $( function() {
    $("#accordion").accordion({
      collapsible: true,
      icons: false      
    });
  });
  
  var aspValue = document.querySelector('.price__input-just-asp');
    
  $('.price__asphalt-range').slider({    
    range: 'min',
    value: 0,
    max: 30,
    slide: function(event, ui) {
      $(aspValue).val(ui.value + ' см');
      if (ui.value > 0) {      
        $(aspValue).css({'color': '#fff'});
        $('.price__asp-range').addClass('price__asp--active');  
        $('.price__asphalt-top-title').css({'color': '#7cc15e'});
      } else {
        $(aspValue).css({'color': '#8e9da9'});          
        $('.price__asp-range').removeClass('price__asp--active');
        $('.price__asphalt-top-title').css({'color': '#436276'});
      }
    } 
  });

  $('.price__in').each(function() {      
    var $this = $(this),
    container = $this.closest('.price__input-item'),
    rangeValue = container.find('.price__value-number'),
    rangeThumb = container.find('.ui-slider-handle'),
    rangeTtl = container.find('.price__input-ttl');
    rangeValue.change(function() {
      $this.slider('value', rangeValue.val());
    });
    $this.slider({
      range: 'min',      
      value: 0,
      max: 50,
      slide: function(event, ui) {
        var value = $(this).slider('option', 'value');
        rangeValue.val(ui.value + ' см');     
        if (ui.value > 0) {      
          rangeValue.css({'color': '#fff'});
          rangeThumb.addClass('price__in--active');  
          rangeTtl.css({'color': '#7cc15e'});
        } else {
          rangeValue.css({'color': '#436276'});          
          rangeThumb.removeClass('price__in--active');
          rangeTtl.css({'color': '#436276'});
        }
      }        
    });      
  });
});



