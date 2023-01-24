import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { WindowComponent } from 'smart-webcomponents-angular/window';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
    @ViewChild('radiobutton4', { read: RadioButtonComponent, static: false }) radiobutton4!: RadioButtonComponent;
    @ViewChild('radiobutton5', { read: RadioButtonComponent, static: false }) radiobutton5!: RadioButtonComponent;
    @ViewChild('radiobutton6', { read: RadioButtonComponent, static: false }) radiobutton6!: RadioButtonComponent;
    @ViewChild('radiobutton7', { read: RadioButtonComponent, static: false }) radiobutton7!: RadioButtonComponent;
    @ViewChild('radiobutton8', { read: RadioButtonComponent, static: false }) radiobutton8!: RadioButtonComponent;
    @ViewChild('radiobutton9', { read: RadioButtonComponent, static: false }) radiobutton9!: RadioButtonComponent;
    @ViewChild('radiobutton10', { read: RadioButtonComponent, static: false }) radiobutton10!: RadioButtonComponent;
    @ViewChild('radiobutton11', { read: RadioButtonComponent, static: false }) radiobutton11!: RadioButtonComponent;
    @ViewChild('radiobutton12', { read: RadioButtonComponent, static: false }) radiobutton12!: RadioButtonComponent;

    @ViewChild('window', { read: WindowComponent, static: false }) smartWindow!: WindowComponent;


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
            radioButtons = [
                that.radiobutton,
                that.radiobutton2,
                that.radiobutton3,
                that.radiobutton4,
                that.radiobutton5,
                that.radiobutton6,
                that.radiobutton7,
                that.radiobutton8,
                that.radiobutton9,
                that.radiobutton10,
                that.radiobutton11,
                that.radiobutton12];
        const window = that.smartWindow;

        radioButtons[0].addEventListener('change', function ():void {
            window.resizeMode = 'none';
        });
        radioButtons[1].addEventListener('change', function ():void {
            window.resizeMode = 'horizontal';
        });
        radioButtons[2].addEventListener('change', function ():void {
            window.resizeMode = 'vertical';
        });
        radioButtons[3].addEventListener('change', function ():void {
            window.resizeMode = 'both';
        });
        radioButtons[4].addEventListener('change', function ():void {
            window.resizeMode = 'top';
        });
        radioButtons[5].addEventListener('change', function ():void {
            window.resizeMode = 'bottom';
        });
        radioButtons[6].addEventListener('change', function ():void {
            window.resizeMode = 'left';
        });
        radioButtons[7].addEventListener('change', function ():void {
            window.resizeMode = 'right';
        });
        radioButtons[8].addEventListener('change', function ():void {
            window.resizeIndicator = false;
        });
        radioButtons[9].addEventListener('change', function ():void {
            window.resizeIndicator = true;
        });
        radioButtons[10].addEventListener('change', function ():void {
            window.liveResize = false;
        });
        radioButtons[11].addEventListener('change', function ():void {
            window.liveResize = true;
        });
    }
}