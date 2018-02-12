
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
        pagination: true,                 
        mouseDrag: false,   
        center: true,
        loop:true
        
	});
});

var bl1 = document.querySelector(".clm1");
var bl2 = document.querySelector(".clm2");
var bl3 = document.querySelector(".clm3");

var ph1 = document.querySelector(".item1");
var ph2 = document.querySelector(".item2");
var ph3 = document.querySelector(".item3");


bl1.addEventListener("click", function (event) {
    event.preventDefault();
    bl2.classList.remove("column-active");
    bl3.classList.remove("column-active");
    bl1.classList.add("column-active");
    ph2.classList.remove("item-active");
    ph3.classList.remove("item-active");
    ph1.classList.add("item-active");
   
});

bl2.addEventListener("click", function (event) {
    event.preventDefault();
    bl1.classList.remove("column-active");
    bl3.classList.remove("column-active");
    bl2.classList.add("column-active");
    ph1.classList.remove("item-active");
    ph3.classList.remove("item-active");
    ph2.classList.add("item-active");
   
});

bl3.addEventListener("click", function (event) {
    event.preventDefault();
    bl1.classList.remove("column-active");
    bl2.classList.remove("column-active");
    bl3.classList.add("column-active");
    ph1.classList.remove("item-active");
    ph2.classList.remove("item-active");
    ph3.classList.add("item-active");
   
});

var cnt1 = document.querySelector(".cont-cml1");
var cnt2 = document.querySelector(".cont-cml2");

var cntit1 = document.querySelector(".cont-itm1");
var cntit2 = document.querySelector(".cont-itm2");


cnt1.addEventListener("click", function (event) {
    event.preventDefault();
    cnt2.classList.remove("column-active");
    cnt1.classList.add("column-active");
    cntit2.classList.remove("contact-active");
    cntit1.classList.add("contact-active");
   
});

cnt2.addEventListener("click", function (event) {
    event.preventDefault();
    cnt1.classList.remove("column-active");
    cnt2.classList.add("column-active");
    cntit1.classList.remove("contact-active");
    cntit2.classList.add("contact-active");
   
});


