import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DateTimePickerComponent } from 'smart-webcomponents-angular/datetimepicker';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('datetimepicker', { read: DateTimePickerComponent, static: false }) datetimepicker!: DateTimePickerComponent;
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

        that.radiobutton.addEventListener('change', function (event) {
            that.datetimepicker.dropDownPosition = 'bottom';
        });
        that.radiobutton2.addEventListener('change', function (event) {
            that.datetimepicker.dropDownPosition = 'top';
        });
        that.radiobutton3.addEventListener('change', function (event) {
            that.datetimepicker.dropDownPosition = 'overlay-bottom';
        });
        that.radiobutton4.addEventListener('change', function (event) {
            that.datetimepicker.dropDownPosition = 'overlay-center';
        });
        that.radiobutton5.addEventListener('change', function (event) {
            that.datetimepicker.dropDownPosition = 'overlay-top';
        });
        that.radiobutton6.addEventListener('change', function (event) {
            that.datetimepicker.dropDownPosition = 'center-bottom';
        });
        that.radiobutton7.addEventListener('change', function (event) {
            that.datetimepicker.dropDownPosition = 'center-top';
        });
        that.radiobutton8.addEventListener('change', function (event) {
            that.datetimepicker.calendarButton = true;
            that.datetimepicker.calendarButtonPosition = 'left';
        });
        that.radiobutton9.addEventListener('change', function (event) {
            that.datetimepicker.calendarButton = true;
            that.datetimepicker.calendarButtonPosition = 'right';
        });
        that.radiobutton10.addEventListener('change', function (event) {
            that.datetimepicker.calendarButton = false;
        });
    }
}