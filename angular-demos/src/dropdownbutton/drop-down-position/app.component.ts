import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DropDownButtonComponent } from 'smart-webcomponents-angular/dropdownbutton';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('dropdownbutton', { read: DropDownButtonComponent, static: false }) dropdownbutton!: DropDownButtonComponent;
    @ViewChild('radiobuttonAuto', { read: RadioButtonComponent, static: false }) radiobuttonAuto!: RadioButtonComponent;
    @ViewChild('radiobuttonBottom', { read: RadioButtonComponent, static: false }) radiobuttonBottom!: RadioButtonComponent;
    @ViewChild('radiobuttonOverlayBottom', { read: RadioButtonComponent, static: false }) radiobuttonOverlayBottom!: RadioButtonComponent;
    @ViewChild('radiobuttonOverlayCenter', { read: RadioButtonComponent, static: false }) radiobuttonOverlayCenter!: RadioButtonComponent;
    @ViewChild('radiobuttonOverlayTop', { read: RadioButtonComponent, static: false }) radiobuttonOverlayTop!: RadioButtonComponent;
    @ViewChild('radiobuttonTop', { read: RadioButtonComponent, static: false }) radiobuttonTop!: RadioButtonComponent;
    @ViewChild('radiobuttonCenterBottom', { read: RadioButtonComponent, static: false }) radiobuttonCenterBottom!: RadioButtonComponent;
    @ViewChild('radiobuttonCenterTop', { read: RadioButtonComponent, static: false }) radiobuttonCenterTop!: RadioButtonComponent;

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
            dropDownButton = that.dropdownbutton;

        that.radiobuttonAuto.addEventListener('change', function ():void {
            dropDownButton.dropDownPosition = 'auto';
        });

        that.radiobuttonBottom.addEventListener('change', function ():void {
            dropDownButton.dropDownPosition = 'bottom';
        });

        that.radiobuttonOverlayBottom.addEventListener('change', function ():void {
            dropDownButton.dropDownPosition = 'overlay-bottom';
        });

        that.radiobuttonOverlayCenter.addEventListener('change', function ():void {
            dropDownButton.dropDownPosition = 'overlay-center';
        });

        that.radiobuttonOverlayTop.addEventListener('change', function ():void {
            dropDownButton.dropDownPosition = 'overlay-top';
        });

        that.radiobuttonTop.addEventListener('change', function ():void {
            dropDownButton.dropDownPosition = 'top';
        });

        that.radiobuttonCenterBottom.addEventListener('change', function ():void {
            dropDownButton.dropDownPosition = 'center-bottom';
        });

        that.radiobuttonCenterTop.addEventListener('change', function ():void {
            dropDownButton.dropDownPosition = 'center-top';
        });
    }
}