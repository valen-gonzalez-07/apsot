class Cartilla {
    constructor(sel) {
        this.name = ".cartilla";
        this.component = document.querySelector(this.name);
        this.dropdowns = this.component.querySelectorAll('.cartilla-busqueda .filtros-wrapper .dropdown');
        this.dropdownOptions = this.component.querySelectorAll('.cartilla-busqueda .filtros-wrapper .dropdown li');
        this.bttnBuscar = this.component.querySelector('.cartilla-busqueda .filtros-wrapper .bttn');
        this.cartillaAfiliados = this.component.querySelector('.cartilla-afiliados-por-derecho');
        if (this.component) {
            this.init();
        }
    }
    init() {
        if(this.dropdowns) {
            this.dropdowns.forEach(dropdown => {
                dropdown.addEventListener('click', () => {
                    dropdown.classList.toggle('opened');
                });
            })
        }
        if(this.dropdownOptions) {
            this.dropdownOptions.forEach(li => {
                li.addEventListener('click', () => {
                    const dropdown = li.closest('.dropdown');
                    const dropdownHeaderText = li.closest('.dropdown').querySelector('.header span');
                    dropdown?.classList.add('selected');
                    if(dropdownHeaderText) {    
                        dropdownHeaderText.textContent = li.textContent;
                    }
                    this.toggleButtonState();
                });
            });
        }
        // funcionamiento solo visual para entrega maqueta, borrar luego para evitar errores
        if(this.component.querySelector('[data-comp="buscarCategorias"]')) {
            this.component.querySelector('[data-comp="buscarCategorias"]').addEventListener('click', () => {
                this.component.querySelector('.cartilla-busqueda .filtros-wrapper').style.display = 'none';
                this.component.querySelector('.cartilla-busqueda .resultado-wrapper').style.display = 'block';
                this.component.querySelector('.cartilla-afiliados-por-derecho').style.display = 'none';
                this.component.querySelector('.cartilla-resultados-categorias').style.display = 'block';
            })
        }
    }
    toggleButtonState() {
        if (!this.bttnBuscar) return; 
        const isActiveHour = this.component.querySelector('.cartilla-busqueda .filtros-wrapper .dropdown.selected');
        if (isActiveHour) {
            this.bttnBuscar.removeAttribute('disabled');
        } else {
            this.bttnBuscar.setAttribute('disabled', 'true');
        }
    }
}

new Cartilla();