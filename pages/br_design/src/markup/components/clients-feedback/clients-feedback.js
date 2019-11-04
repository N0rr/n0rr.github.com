import Component from 'helpers-js/Component';
import 'owl.carousel';

export default Component.create('clients-feedback', class {
    constructor($block) {
        this.$block = $block;
        this.init();
    }

    init() {
        let owlFeedback = document.getElementById('feedback-slider');

        $(owlFeedback).owlCarousel({
            items: 1,
            margin: 0,
            autoWidth: false,
            pagination: false,
            pullDrag: true,
            mouseDrag: true,
            dots: true,
            nav: false,
            center: false,
            responsive: {
                768: {
                    margin: 40
                },
                1280: {
                    margin: 88,
                    autoWidth: true,
                    center: true,
                    loop: true
                }
            }
        });
    }
});
