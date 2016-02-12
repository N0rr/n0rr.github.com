
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
        autoWidth: true,
        center: true,
        autoplay: true,        
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        loop:true
        
	});
});

$(document).ready(function() {

    $(".slide2-prev").click(function(){
		owl.trigger("prev.owl");
	});
	$(".slide2-next").click(function(){
		owl.trigger("next.owl");
	});	
    
    var owl = $(".carousel-3");
	owl.owlCarousel({
		items : 1,
        margin: 0,    
        pagination: false,                 
        mouseDrag: false,   
        center: true,       
        loop:true
        
	});
});


