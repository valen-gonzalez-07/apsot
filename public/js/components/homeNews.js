class HomeNews {
    constructor(sel) {
        this.name = ".home-news";
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
            pagination: false,
            rewind: true,
            gap: '20px',
            fixedWidth : '290px',
            drag: false,
            breakpoints: {
                1340: {
                    drag: true,
                }
            }
        });
        sliderNode.mount();
    }
}

new HomeNews();