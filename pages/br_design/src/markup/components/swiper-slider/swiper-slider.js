import Component from 'helpers-js/Component';
import Swiper from 'swiper/dist/js/swiper.js';

export default Component.create('swiper-slider', class {
    constructor($block) {
        this.$block = $block;
        this.init();
    }

    init() {
        this.swiperBlock = document.getElementById('swiper-page');
        this.swiper = 'undefined';


        window.addEventListener('load', this.checkSwiper(this.swiper));
        window.addEventListener('resize', e => {
            this.checkSwiper(this.swiper);
        });
        window.addEventListener('click', e => {
            if (window.innerWidth >= 1280) {// условие только в сочетании с scrollto
                this.scrollto(e);
            }
        });
    }

    checkSwiper(e) {
        let test = this.swiper;

        if (window.innerWidth >= 1280 && test === 'undefined') {
            console.log('init');
            this.initSwiper();

        } else if (window.innerWidth < 1280 && test !== 'undefined') {
            console.log('destroy');
            e.destroy();
            this.swiper = 'undefined';
        }
    }

    initSwiper() {
        this.swiper = new Swiper(this.swiperBlock, {
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 30,
            simulateTouch: false,
            // autoHeight: true,
            mousewheel: {
                forceToaxis: true,
                releaseOnEdges: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
        });
    }

    scrollto(e) {
        let swiperLinkBlock = e.target;

        if (swiperLinkBlock.classList.contains('swiper-scrollto-js')) {
            e.preventDefault();
            let swiperIndex = swiperLinkBlock.getAttribute('data-slide');
            this.swiper.slideTo(swiperIndex);
        }

    }
});


