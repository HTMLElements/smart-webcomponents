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
    @ViewChild('gauge2', { read: GaugeComponent, static: false }) gauge2!: GaugeComponent;
    @ViewChild('gauge3', { read: GaugeComponent, static: false }) gauge3!: GaugeComponent;
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
        const that = this,
            gauges = [that.gauge, that.gauge2, that.gauge3];

        that.radiobutton.addEventListener('change', function () {
            gauges.map(function (g) { g.mechanicalAction = 'switchWhileDragging'; });
        });
        that.radiobutton2.addEventListener('change', function () {
            gauges.map(function (g) { g.mechanicalAction = 'switchUntilReleased'; });
        });
        that.radiobutton3.addEventListener('change', function () {
            gauges.map(function (g) { g.mechanicalAction = 'switchWhenReleased'; });
        });
    }
}