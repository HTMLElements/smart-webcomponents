import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
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

        this.smartWindow.addEventListener('click', function (event: CustomEvent): void {
            const target: HTMLElement = event.target as HTMLElement;

            if (target.closest('.smart-dock-button')) {
                console.log('Dock');
                alert('Dock button pressed');
            }
            else if (target.closest('.smart-block-button')) {
                console.log('Block');
                alert('Block button pressed');
            }
            else if (target.closest('.smart-autoclose-button')) {
                console.log('Autoclose');
                alert('Autoclose button pressed');
            }
            else if (target.closest('.smart-readonly-button')) {
                console.log('Readonly');
                alert('Readonly button pressed');
            }
            else if (target.closest('.smart-pin-button')) {
                console.log('Pin');
                alert('Pin button pressed');
            }
            else if (target.closest('.smart-close-button')) {
                console.log('Pin');
                alert('Close button pressed');
            }
        })
    }
}