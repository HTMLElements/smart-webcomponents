import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { WindowComponent } from 'smart-webcomponents-angular/window';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
    @ViewChild('radiobutton4', { read: RadioButtonComponent, static: false }) radiobutton4!: RadioButtonComponent;
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

        const that = this,
            smartWindow = document.querySelector('smart-window'),
            radioButtons = [that.radiobutton, that.radiobutton2, that.radiobutton3, that.radiobutton4];

        radioButtons[0].addEventListener('change', function ():void {
            smartWindow.headerPosition = 'top';
        });

        radioButtons[1].addEventListener('change', function ():void {
            smartWindow.headerPosition = 'bottom';
        });

        radioButtons[2].addEventListener('change', function ():void {
            smartWindow.headerPosition = 'left';
        });

        radioButtons[3].addEventListener('change', function ():void {
            smartWindow.headerPosition = 'right';
        });
    }
}