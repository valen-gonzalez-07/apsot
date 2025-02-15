class HomeHeader {
    constructor(sel) {
        this.name = ".home-header";
        this.components = document.querySelectorAll(this.name);
        if (this.components.length) {
            this.init();
        }
    }
    init() {
        this.components.forEach((component) => {
           const sliderNode = component.querySelector('.splide');
           if(!sliderNode) return;
           this.initSplide(sliderNode);
        });
    }
    initSplide(slider) {
        const sliderNode = new Splide(slider, {
            type: 'slide',
            arrows: false,
            pagination: true,
            rewind: true,
            gap: '0px',
            perPage: 1,
        });
        sliderNode.mount();
    }
}

new HomeHeader();