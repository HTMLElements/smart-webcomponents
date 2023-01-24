import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { GaugeComponent } from 'smart-webcomponents-angular/gauge';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2!: CheckBoxComponent;
    @ViewChild('gauge', { read: GaugeComponent, static: false }) gauge!: GaugeComponent;
    @ViewChild('gauge2', { read: GaugeComponent, static: false }) gauge2!: GaugeComponent;
    @ViewChild('gauge3', { read: GaugeComponent, static: false }) gauge3!: GaugeComponent;
    @ViewChild('gauge4', { read: GaugeComponent, static: false }) gauge4!: GaugeComponent;

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

        that.checkbox.addEventListener('change', function (event: CustomEvent) {
            const checked = event.detail.value;

            that.gauge.customInterval = checked;
            that.gauge2.customInterval = checked;
            that.gauge3.customInterval = checked;
            that.gauge4.customInterval = checked;
        });

        that.checkbox2.addEventListener('change', function (event: CustomEvent) {
            const checked = event.detail.value;

            that.gauge.coerce = checked;
            that.gauge2.coerce = checked;
            that.gauge3.coerce = checked;
            that.gauge4.coerce = checked;
        });
    }

    gauge4LabelFormatFunction(value): string {
        return String.fromCharCode(64 + parseFloat(value));
    }
}