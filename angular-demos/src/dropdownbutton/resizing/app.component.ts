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
    @ViewChild('radiobuttonNone', { read: RadioButtonComponent, static: false }) radiobuttonNone: RadioButtonComponent;
    @ViewChild('radiobuttonVertical', { read: RadioButtonComponent, static: false }) radiobuttonVertical: RadioButtonComponent;
    @ViewChild('radiobuttonHorizontal', { read: RadioButtonComponent, static: false }) radiobuttonHorizontal: RadioButtonComponent;
    @ViewChild('radiobuttonBoth', { read: RadioButtonComponent, static: false }) radiobuttonBoth: RadioButtonComponent;
    @ViewChild('radiobuttonBottom', { read: RadioButtonComponent, static: false }) radiobuttonBottom: RadioButtonComponent;
    @ViewChild('radiobuttonTop', { read: RadioButtonComponent, static: false }) radiobuttonTop: RadioButtonComponent;

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

        that.radiobuttonNone.addEventListener('change', function ():void {
            dropDownButton.resizeMode = 'none';
        });

        that.radiobuttonVertical.addEventListener('change', function ():void {
            dropDownButton.resizeMode = 'vertical';
        });

        that.radiobuttonHorizontal.addEventListener('change', function ():void {
            dropDownButton.resizeMode = 'horizontal';
        });

        that.radiobuttonBoth.addEventListener('change', function ():void {
            dropDownButton.resizeMode = 'both';
        });

        that.radiobuttonBottom.addEventListener('change', function ():void {
            dropDownButton.dropDownPosition = 'bottom';
        });

        that.radiobuttonTop.addEventListener('change', function ():void {
            dropDownButton.dropDownPosition = 'top';
        });
    }
}