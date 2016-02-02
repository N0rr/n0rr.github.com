$(document).ready(function() {
	

	var owl = $(".carousel");
	owl.owlCarousel({
		items : 1,
        margin: 0,    
        pagination: false,       
        pullDrag: false,
        mouseDrag: false,       
        onInitialize: function (event) {
            if ($('.carousel-item').length > 1) { 
               this.settings.loop = true; 
            }
        }
	});  


	$(".next-button").click(function(){
		owl.trigger(""); /*next.owl*/
	});
	$(".prev-button").click(function(){
		owl.trigger("");/*prev.owl*/
    });
    

});

$(document).ready(function() {

    $(".slide-prev").click(function(){
		owl.trigger("prev.owl");
	});
	$(".slide-next").click(function(){
		owl.trigger("next.owl");
	});	
    
    var owl = $(".carousel-2");
	owl.owlCarousel({
		items : 1,
        margin: 0,    
        pagination: true,
        navContainer: '#customNav',
        dotsContainer: '#customDots',  
        mouseDrag: false,
        onInitialize: function (event) {
            if ($('.slide-1').length > 1) { 
               this.settings.loop = true; 
            }
        }
	});
});

$(document).ready(function() {
	

	var owl = $(".carousel-3");
	owl.owlCarousel({
		items : 1,
        margin: 0,    
        autoWidth: false,
        pagination: false, 
        mouseDrag: false,
        onInitialize: function (event) {
            if ($('.bl14-wrapper').length > 1) { 
               this.settings.loop = true; 
            }
        }
	});  


	$(".bl14-slide-prev").click(function(){
		owl.trigger(""); /*next.owl*/
	});
	$(".bl14-slide-next").click(function(){
		owl.trigger(""); /*prev.owl*/
    });
    

});
$(document).ready(function() { 
    var owl = $(".carousel-bl3");    
     owl.owlCarousel({          
        items : 1,        
        margin: 0,  
        autoWidth: false,
        pagination: false, 
        mouseDrag: false,      
        onInitialize: function (event) {
        if ($('.bl3-news').length > 1) { 
           this.settings.loop = true;
        }
    }
    });   
    
	$(".bl3-arrow-prev").click(function(){
		owl.trigger("next.owl"); /*next.owl*/
	});
	$(".bl3-arrow-next").click(function(){
		owl.trigger("prev.owl"); /*prev.owl*/
    });   
    
    
});
