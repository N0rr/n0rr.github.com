import Component from 'helpers-js/Component';
import 'owl.carousel';

export default Component.create('design', class {
    constructor($block) {
        this.$block = $block;
        this.init();
    }

    init() {
        let owlDesign = document.querySelector('#design-slider');

        $(owlDesign).owlCarousel({
            items: 1,
            loop: true,
            margin: 40,
            autoplay: false,
            autoWidth: true,
            // autoHeight: true,
            pagination: false,
            pullDrag: true,
            mouseDrag: true,
            dots: true,
            nav: false

        });
    }
});
