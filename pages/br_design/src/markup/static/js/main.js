'use strict';

import polyfills from './libraries/polyfills';
import Component from 'helpers-js/Component';

import 'components/scrollto/scrollto';
import 'components/slide-menu/slide-menu';
// import 'components/ui-slide/ui-slide';
// import 'components/select/select';
// import 'components/input/input';
// import 'components/popup/popup';
import 'components/order/order';
import 'components/portfolio/portfolio';
import 'components/header/header';
// import 'components/swiper-slider/swiper-slider';
import 'components/tabs/tab/tab';
import 'components/order/order';
import 'components/clients-feedback/clients-feedback';
import 'components/design/design';

$(() => {
    polyfills.init();
    Component.initAll();
    // ================ Здесь инициализируем модули =====================
});
