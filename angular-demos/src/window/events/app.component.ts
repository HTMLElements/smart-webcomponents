import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { WindowComponent } from 'smart-webcomponents-angular/window';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('window', { read: WindowComponent, static: false }) smartWindow!: WindowComponent;
    @ViewChild('log', { read: ElementRef, static: false }) log: ElementRef;

    onButtonClick(event: any): void {
        const smartWindow = this.smartWindow;

        smartWindow.opened ? smartWindow.close() : smartWindow.open();
    }

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.

        const smartWindow = this.smartWindow,
            eventLog = this.log.nativeElement;

        function getElement(event: CustomEvent): HTMLDivElement {
            const element = document.createElement('div');

            element.textContent = 'Type: ' + event.type;

            if (event.detail.x) {
                element.textContent += ', X: ' + event.detail.x + ', Y: ' + event.detail.y;
            }
            return element;
        }

        smartWindow.addEventListener('resize', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        });
        
        smartWindow.addEventListener('drag', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        });
        
        smartWindow.addEventListener('collapse', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        });

        smartWindow.addEventListener('expand', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        });

        smartWindow.addEventListener('maximize', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        });

        smartWindow.addEventListener('minimize', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        });

        smartWindow.addEventListener('restore', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        });

        smartWindow.addEventListener('open', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        });

        smartWindow.addEventListener('opening', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        });

        smartWindow.addEventListener('close', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        });

        smartWindow.addEventListener('closing', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        });

        smartWindow.addEventListener('dragStart', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        });

        smartWindow.addEventListener('dragEnd', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        });

        smartWindow.addEventListener('resizeStart', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        });

        smartWindow.addEventListener('resizeEnd', function (event: CustomEvent): void {
            eventLog.appendChild(getElement(event));
        });


    }
}