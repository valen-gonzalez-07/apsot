class ChequeoReserva {
    constructor(sel) {
        this.name = ".chequeo-reserva";
        this.component = document.querySelector(this.name);
        this.dropdown = this.component.querySelector('.dropdown');
        this.dropdownOptions = this.component.querySelectorAll('.dropdown li');
        this.datesDropdowns = this.component.querySelectorAll('.dates-content .date');
        this.openDatesDropdowns = this.component.querySelectorAll('.dates-content .date .open-hours');
        this.hours = this.component.querySelectorAll('.dates-content .date .hours button');
        this.bttnSolicitarTurno = this.component.querySelector('.solicitar-turno');
        if (this.component) {
            this.init();
        }
    }
    init() {
        if(this.dropdown) {
            this.dropdown.addEventListener('click', () => {
                this.dropdown.classList.toggle('opened');
            });
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
                });
            });
        }
        if(this.openDatesDropdowns) {
            this.openDatesDropdowns.forEach(date => {
                date.addEventListener('click', () => {
                    const selectedDateDropdown = date.parentElement;
                    selectedDateDropdown.classList.toggle('opened');
                });
            });
        }
        if(this.hours) {
            this.hours.forEach(hour => {
                hour.addEventListener('click', () => {
                    this.hours.forEach(el => el.classList.remove('active'));
                    hour.classList.add('active');
                    this.toggleButtonState();
                });
            });
        }
    }
    toggleButtonState() {
        if (!this.bttnSolicitarTurno) return; 
        const isActiveHour = this.component.querySelector('.hours button.active');
        if (isActiveHour) {
            this.bttnSolicitarTurno.removeAttribute('disabled');
        } else {
            this.bttnSolicitarTurno.setAttribute('disabled', 'true');
        }
    }
}

new ChequeoReserva();