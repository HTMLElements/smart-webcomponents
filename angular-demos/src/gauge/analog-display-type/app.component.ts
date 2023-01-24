import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GaugeComponent } from 'smart-webcomponents-angular/gauge';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('gauge', { read: GaugeComponent, static: false }) gauge!: GaugeComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;


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

        that.radiobutton.addEventListener('change', function () {
            that.gauge.analogDisplayType = 'needle';
        });
        that.radiobutton2.addEventListener('change', function () {
            that.gauge.analogDisplayType = 'fill';
        });
        that.radiobutton3.addEventListener('change', function () {
            that.gauge.analogDisplayType = 'line';
        });
    }
}