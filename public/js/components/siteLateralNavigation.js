class SiteLateralNavigation {
    constructor(sel) {
        this.component = document.querySelector('.lateral-navigation');
        this.footer = document.querySelector('.site-footer');
        this.init();
    }

    init() {
        if (!this.component || !this.footer) return;
        const WW = window.innerWidth;
        if(WW > 960) {
            const heightFooter = this.footer.scrollHeight;
            this.component.style.setProperty('--heightFooter', `${heightFooter}px`);
            this.component.classList.add('is-fixed');
        } else {
            this.component.classList.add('is-fixed');
            window.addEventListener('scroll', this.onScroll.bind(this));
        }
    }

    onScroll() {
        const footerRect = this.footer.getBoundingClientRect();
        if (footerRect.top <= window.innerHeight) {
            this.component.classList.remove('is-fixed');
        } else {
            this.component.classList.add('is-fixed');
        }
    }
}

new SiteLateralNavigation();
