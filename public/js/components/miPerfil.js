class MiPerfil {
    constructor(sel) {
        this.name = ".mi-perfil";
        this.component = document.querySelector(this.name);
        this.openEditor = this.component.querySelectorAll('.mi-perfil-grupo-familiar .familiar-box .header-box');
        if (this.component) {
            this.init();
        }
    }
    init() {
        if(this.openEditor) {
            this.openEditor.forEach(header => {
                header.addEventListener('click', () => {
                    let familiarBox = header.parentElement;
                    let box = familiarBox.querySelector('.contact-box');
                    let heightBox = box.scrollHeight;
                    if(box) {
                        familiarBox.style.setProperty('--heigthEditor', `${heightBox}px`);
                    }
                    familiarBox.classList.toggle('opened');
                });
            });
        }
    }
}

new MiPerfil();