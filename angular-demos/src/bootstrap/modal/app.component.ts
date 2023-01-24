import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { BootstrapInput, BootstrapModal, BootstrapModalComponent } from 'smart-webcomponents-angular/bootstrap/';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('modal', { read: BootstrapModalComponent, static: false }) modal: BootstrapModalComponent;
    @ViewChild('exampleModalLive', { read: BootstrapModalComponent, static: false }) exampleModalLive: BootstrapModalComponent;
    @ViewChild('exampleModalLong', { read: BootstrapModalComponent, static: false }) exampleModalLong: BootstrapModalComponent;
    @ViewChild('exampleModalScrollable', { read: BootstrapModalComponent, static: false }) exampleModalScrollable: BootstrapModalComponent;
    @ViewChild('exampleModalScrollableCenter', { read: BootstrapModalComponent, static: false }) exampleModalScrollableCenter: BootstrapModalComponent;
    @ViewChild('exampleModalCenter', { read: BootstrapModalComponent, static: false }) exampleModalCenter: BootstrapModalComponent;
    @ViewChild('exampleModal', { read: BootstrapModalComponent, static: false }) exampleModal: BootstrapModalComponent;
    @ViewChild('sizeModeModal', { read: BootstrapModalComponent, static: false }) sizeModeModal: BootstrapModalComponent;
    sizeModeModalTitle = 'Extra Large Modal';

    ngAfterViewInit(): void {
        // afterViewInit code.
        const that = this;

        document.addEventListener('click', function (event) {
            const target = event.target as HTMLElement,
                isButton = target.closest('bootstrap-button');

            if (isButton && isButton.getAttribute('data-toggle') === 'modal') {
                const modal = that[isButton.getAttribute('data-target').replace('#', '')];
                const data = isButton.getAttribute('data-whatever');
                const size = isButton.getAttribute('data-size');

                if (data) {
                    const modalInput = modal.querySelector('.modal-div input') as BootstrapInput;

                    if (modalInput) {
                        modalInput.value = data;
                    }
                }

                if (size) {
                    that.sizeModeModalTitle = isButton.textContent.trim();
                    modal.sizeMode = size;
                }


                if (modal) {
                    modal.toggle();
                }
            }
        });
    }

    ngOnInit(): void {
        // onInit code.
        this.init();
    }

    init(): void {
        // init code.


    }
}