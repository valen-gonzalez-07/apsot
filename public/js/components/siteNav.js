class SiteNav {
    constructor(sel) {
        this.component = document.querySelector('.site-nav');
        // buscador
        this.openSearch = this.component.querySelector('[data-comp="openSearch"]');
        this.search = this.component.querySelector('[data-comp="buscador"]');
        // menú lateral 
        this.openMenu = this.component.querySelector('[data-comp="openMenu"]');
        this.closeMenu = this.component.querySelector('[data-comp="closeMenu"]');
        this.lateralMenu = this.component.querySelector('[data-comp="lateralMenu"]');
        this.lateralMenuBox = this.lateralMenu.querySelector('.menu-box');
        this.openSubmenu = this.component.querySelectorAll('.has-submenu > a');
        this.submenu = this.component.querySelectorAll('.sub-menu');
        // dropdown logged
        this.openLogged = this.component.querySelector('[data-comp="openLogged"]');
        this.logged = this.component.querySelector('.logged');
        if (this.component) {
            this.init();
        }
    }

    init() {
        if (this.openSearch) {
            this.openSearch.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleSearch();
            });
        }
        if (this.openMenu) {
            this.openMenu.addEventListener('click', (e) => {
                e.preventDefault();
                this.lateralMenu.classList.add('opened');
                document.body.dataset.menu = 'opened';
            });
        }
        if (this.closeMenu) {
            this.closeMenu.addEventListener('click', (e) => {
                e.preventDefault();
                this.lateralMenu.classList.remove('opened');
                document.body.dataset.menu = 'closed';
            });
        }
        if (this.openSubmenu) {
            this.openSubmenu.forEach(bttn => {
                bttn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const submenu = bttn.parentElement.querySelector('.sub-menu');
                    if(submenu) {
                        const submenuHeight = submenu.scrollHeight;
                        bttn.parentElement.style.setProperty('--height', `${submenuHeight}px`);
                    }
                    this.toggleSubmenu(bttn);
                });
            });
        }
        if (this.lateralMenu) {
            this.lateralMenu.addEventListener('click', (e) => {
                if (document.body.dataset.menu === 'opened' && 
                    !this.lateralMenuBox.contains(e.target)) {
                    this.lateralMenu.classList.remove('opened');
                    document.body.dataset.menu = 'closed';
                }
            });
        }
        if (this.openLogged && document.body.classList.contains('logged-in')) {
            this.openLogged.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleLogged();
            });
        }
        document.addEventListener('click', (e) => {
            this.handleDocumentClick(e);
        });
    }

    toggleSearch() {
        if (this.search) {
            this.search.classList.toggle('opened');
            this.openSearch.classList.toggle('active', this.search.classList.contains('opened'));
        }
    }

    toggleSubmenu(button) {
        const submenu = button.parentElement.querySelector('.sub-menu');
        if (submenu) {
            this.submenu.forEach(menu => {
                if (menu !== submenu) {
                    menu.classList.remove('opened');
                    menu.parentElement.querySelector('a').classList.remove('active');
                }
            });
            const isOpened = submenu.classList.toggle('opened');
            button.classList.toggle('active', isOpened);
        }
    }

    toggleLogged() {
        if (this.logged) {
            const isActive = this.logged.classList.toggle('active');
            this.openLogged.classList.toggle('active', isActive);
        }
    }

    handleDocumentClick(e) {
        // click afuera de logged, del buscador o del lateral menú los cierra 

        if (this.search && 
            !this.search.contains(e.target) && 
            !this.openSearch.contains(e.target) && 
            this.search.classList.contains('opened')) {
            this.search.classList.remove('opened');
            this.openSearch.classList.remove('active');
        }

        if (this.logged && 
            !this.logged.contains(e.target) && 
            !this.openLogged.contains(e.target) && 
            this.logged.classList.contains('active')) {
            this.logged.classList.remove('active');
            this.openLogged.classList.remove('active');
        }

        if (!this.component.contains(e.target)) {
            this.submenu.forEach(menu => menu.classList.remove('opened'));
        }
    }
}

new SiteNav();
