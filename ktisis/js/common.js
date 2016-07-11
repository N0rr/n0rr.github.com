
$(document).ready(function () {

    var owl = $(".slider-1");
    owl.owlCarousel({
        items: 1,
        margin: 0,
        autoWidth: false,
        pagination: true,
        navContainer: '#customNav',
        dotsContainer: '#customDots',
        mouseDrag: false,
        onInitialize: function (event) {
            if ($('.slide').length > 1) {
                this.settings.loop = true;
            }
        }
    });
    $(".slide-next").click(function () {
        owl.trigger("next.owl"); /*next.owl*/
    });
    $(".slide-prev").click(function () {
        owl.trigger("prev.owl"); /*prev.owl*/
    });
});


$(document).ready(function () {
    var owl = $(".side-slider-1");
    owl.owlCarousel({
        items: 1,
        margin: 0,
        autoWidth: false,            
        mouseDrag: false,
        pagination: false,
        dots: false,
        onInitialize: function (event) {
            if ($('.side1-slide').length > 1) {
                this.settings.loop = true;
            }
        }
    });
    $(".side-next").click(function () {
        owl.trigger("next.owl"); /*next.owl*/
    });
    $(".side-prev").click(function () {
        owl.trigger("prev.owl"); /*prev.owl*/
    });
    
});
$(document).ready(function () {
    var owl = $(".side-slider-2");
    owl.owlCarousel({
        items: 1,
        margin: 0,
        autoWidth: false,            
        mouseDrag: false,
        pagination: false,
        dots: false,
        onInitialize: function (event) {
            if ($('.side2-slide').length > 1) {
                this.settings.loop = true;
            }
        }
    });
    $(".side1-next").click(function () {
        owl.trigger("next.owl"); /*next.owl*/
    });
    $(".side1-prev").click(function () {
        owl.trigger("prev.owl"); /*prev.owl*/
    });
    
});
