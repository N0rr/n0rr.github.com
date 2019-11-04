import Component from 'helpers-js/Component';
require('jquery-ui/ui/widgets/tabs');

export default Component.create('tab', class {
    constructor($block) {
        this.$block = $block;
        this.init();
    }

    init() {
        let tabs1 = document.getElementById('portfolio-tabs');
        let tabs2 = document.getElementById('our-services-tabs');

        $(tabs1).tabs();
        $(tabs2).tabs();

    }

});
