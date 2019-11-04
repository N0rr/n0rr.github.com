import Component from 'helpers-js/Component';
import 'owl.carousel';

export default Component.create('portfolio', class {
    constructor($block) {
        this.$block = $block;
        this.init();
    }

    init() {
        let owlPortfolio = document.querySelector('.portfolio');
        let $owlPortfolioSliders = $(owlPortfolio).find('.owl-slider');

        $owlPortfolioSliders.each(function () {
            $owlPortfolioSliders.owlCarousel({
                items: 1,
                margin: 15,
                autoWidth: true,
                pagination: false,
                pullDrag: true,
                loop: true,
                mouseDrag: true,
                dots: false,
                nav: false,
                center: true,
                responsive: {
                    768: {
                        margin: 40
                    },
                    1280: {
                        autoWidth: true,
                        margin: 0,
                        items: 4,
                        nav: true,
                        center: false
                    }
                }
            });
        });
        // $('#owl-portfolio1').owlCarousel({
        //     margin: 0,
        //     pagination: false,
        //     pullDrag: true,
        //     mouseDrag: true,
        //     dots: true,
        //     nav: true,
        //     center: true,
        //     navContainer: '.portfolio__nav',
        // });
    }
});
