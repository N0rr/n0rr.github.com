$(document).ready(function() {
	

	var owl = $(".carousel");
	owl.owlCarousel({
		items : 3,
        margin: -10,
        loop:true
        
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("next.owl");
		} else {
			owl.trigger("prev.owl");
		}
		e.preventDefault();
	});
	$(".next-button").click(function(){
		owl.trigger("next.owl");
	});
	$(".prev-button").click(function(){
		owl.trigger("prev.owl");
	});	
    
   
	$(".fancybox-button").fancybox({
		prevEffect		: 'none',
		nextEffect		: 'none',
		closeBtn		: true,
		
	});
});