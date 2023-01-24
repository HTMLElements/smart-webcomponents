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
    @ViewChild('gauge4', { read: GaugeComponent, static: false }) gauge4!: GaugeComponent;
    @ViewChild('gauge5', { read: GaugeComponent, static: false }) gauge5!: GaugeComponent;
    @ViewChild('gauge6', { read: GaugeComponent, static: false }) gauge6!: GaugeComponent;
    @ViewChild('gauge7', { read: GaugeComponent, static: false }) gauge7!: GaugeComponent;
    @ViewChild('gauge8', { read: GaugeComponent, static: false }) gauge8!: GaugeComponent;
    @ViewChild('gauge9', { read: GaugeComponent, static: false }) gauge9!: GaugeComponent;
    @ViewChild('gauge10', { read: GaugeComponent, static: false }) gauge10!: GaugeComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
    @ViewChild('radiobutton4', { read: RadioButtonComponent, static: false }) radiobutton4!: RadioButtonComponent;
    @ViewChild('radiobutton5', { read: RadioButtonComponent, static: false }) radiobutton5!: RadioButtonComponent;
    @ViewChild('radiobutton6', { read: RadioButtonComponent, static: false }) radiobutton6!: RadioButtonComponent;


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

        const gauges = [that.gauge, that.gauge2, that.gauge3, that.gauge4, that.gauge5, that.gauge6, that.gauge7, that.gauge8, that.gauge9, that.gauge10];
        // labels
        that.radiobutton.addEventListener('change', function () {
            gauges.map(function (g) { g.labelsVisibility = 'all'; });
        });
        that.radiobutton2.addEventListener('change', function () {
            gauges.map(function (g) { g.labelsVisibility = 'endPoints'; });
        });
        that.radiobutton3.addEventListener('change', function () {
            gauges.map(function (g) { g.labelsVisibility = 'none'; });
        });
        // ticks
        that.radiobutton4.addEventListener('change', function () {
            gauges.map(function (g) { g.ticksVisibility = 'major'; });
        });
        that.radiobutton5.addEventListener('change', function () {
            gauges.map(function (g) { g.ticksVisibility = 'minor'; });
        });
        that.radiobutton6.addEventListener('change', function () {
            gauges.map(function (g) { g.ticksVisibility = 'none'; });
        });
    }
}