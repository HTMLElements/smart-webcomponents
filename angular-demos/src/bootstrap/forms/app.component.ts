import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { BootstrapInput, BootstrapModal } from 'smart-webcomponents-angular/bootstrap';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {


    ngAfterViewInit(): void {
        // afterViewInit code.
        document.addEventListener('click', function (event) {
            const target = event.target as HTMLElement,
                isButton = target.closest('button');

            if (isButton && isButton.getAttribute('data-toggle') === 'modal') {
                const modal = document.querySelector(isButton.getAttribute('data-target')) as BootstrapModal,
                    data = isButton.getAttribute('data-whatever');

                if (data) {
                    const modalInput = modal.querySelector('.modal-div input') as BootstrapInput;

                    if (modalInput) {
                        modalInput.value = data;
                    }
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