import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { TimePickerComponent } from 'smart-webcomponents-angular/timepicker';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
    @ViewChild('radiobutton4', { read: RadioButtonComponent, static: false }) radiobutton4!: RadioButtonComponent;
    @ViewChild('radiobutton5', { read: RadioButtonComponent, static: false }) radiobutton5!: RadioButtonComponent;
    @ViewChild('timepicker', { read: TimePickerComponent, static: false }) timepicker!: TimePickerComponent;
    @ViewChild('valueLog', { read: ElementRef, static: false }) valueLog!: ElementRef;

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

        that.valueLog.nativeElement.innerHTML = that.timepicker.value.getHours() + ':' + that.timepicker.value.getMinutes();

        that.timepicker.addEventListener('change', function (event: any) {
            const value = event.detail.value;
            that.valueLog.nativeElement.innerHTML = value.getHours() + ':' + value.getMinutes();
        });
        that.radiobutton.addEventListener('change', function () {
            that.timepicker.selection = 'hour';
        });
        that.radiobutton2.addEventListener('change', function () {
            that.timepicker.selection = 'minute';
        });
        that.radiobutton3.addEventListener('change', function () {
            that.timepicker.minuteInterval = 1;
        });
        that.radiobutton4.addEventListener('change', function () {
            that.timepicker.minuteInterval = 5;
        });
        that.radiobutton5.addEventListener('change', function () {
            that.timepicker.minuteInterval = 15;
        });
        that.button.addEventListener('click', function () {
            that.timepicker.setHours(20);
        });
        that.button2.addEventListener('click', function () {
            that.timepicker.setMinutes(12);
        });
        that.button3.addEventListener('click', function () {
            that.timepicker.value = new Date();
        });
    }
}