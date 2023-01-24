import { Component, ViewEncapsulation, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
    @ViewChild('radiobuttonnone', { read: RadioButtonComponent, static: false }) radiobuttonnone!: RadioButtonComponent;
    @ViewChild('radiobuttonhorizontal', { read: RadioButtonComponent, static: false }) radiobuttonhorizontal!: RadioButtonComponent;
    @ViewChild('radiobuttonboth', { read: RadioButtonComponent, static: false }) radiobuttonboth!: RadioButtonComponent;
    @ViewChild('radiobuttonvertical', { read: RadioButtonComponent, static: false }) radiobuttonvertical!: RadioButtonComponent;
    @ViewChild('radiobuttonbottom', { read: RadioButtonComponent, static: false }) radiobuttonbottom!: RadioButtonComponent;
    @ViewChild('radiobuttontop', { read: RadioButtonComponent, static: false }) radiobuttontop!: RadioButtonComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.

        const that = this;
        const dropDownList = that.dropdownlist;

        that.radiobuttonnone.addEventListener('change', function ():void {
            dropDownList.resizeMode = 'none';
        });

        that.radiobuttonvertical.addEventListener('change', function ():void {
            dropDownList.resizeMode = 'vertical';
        });

        that.radiobuttonhorizontal.addEventListener('change', function ():void {
            dropDownList.resizeMode = 'horizontal';
        });

        that.radiobuttonboth.addEventListener('change', function ():void {
            dropDownList.resizeMode = 'both';
        });

        that.radiobuttonbottom.addEventListener('change', function ():void {
            dropDownList.dropDownPosition = 'bottom';
        });

        that.radiobuttontop.addEventListener('change', function ():void {
            dropDownList.dropDownPosition = 'top';
        });
    }
}