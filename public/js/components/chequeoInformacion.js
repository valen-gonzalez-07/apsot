class ChequeoInformacion {
    constructor(sel) {
        this.name = ".chequeo-informacion";
        this.component = document.querySelector(this.name);
        this.accordionsHeaders = this.component.querySelectorAll('.accordions .accordion .header');
        if (this.component) {
            this.init();
        }
    }
    init() {
        if(this.accordionsHeaders) {
            this.accordionsHeaders.forEach(acc => {
                acc.addEventListener('click', () => {
                    let accordion = acc.parentElement;
                    let content = accordion.querySelector('.content');
                    let heightContent = content.scrollHeight;
                    if(content) {
                        accordion.style.setProperty('--height', `${heightContent}px`);
                    }
                    accordion.classList.toggle('opened');
                });
            });
        }
    }
}

new ChequeoInformacion();