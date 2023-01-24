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
            that.datetimepicker.dropDownDisplayMode = 'default';
        });
        that.radiobutton2.addEventListener('change', function (event) {
            that.datetimepicker.dropDownDisplayMode = 'classic';
        });
        that.radiobutton3.addEventListener('change', function (event) {
            that.datetimepicker.dropDownDisplayMode = 'calendar';
        });
        that.radiobutton4.addEventListener('change', function (event) {
            that.datetimepicker.dropDownDisplayMode = 'timePicker';
        });
        that.radiobutton5.addEventListener('change', function (event) {
            that.datetimepicker.dropDownDisplayMode = 'auto';
        });
    }
}