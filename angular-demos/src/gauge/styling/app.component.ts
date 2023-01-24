import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GaugeComponent } from 'smart-webcomponents-angular/gauge';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('gauge', { read: GaugeComponent, static: false }) gauge!: GaugeComponent;
    @ViewChild('gauge2', { read: GaugeComponent, static: false }) gauge2!: GaugeComponent;
    @ViewChild('gauge3', { read: GaugeComponent, static: false }) gauge3!: GaugeComponent;
    @ViewChild('gauge4', { read: GaugeComponent, static: false }) gauge4!: GaugeComponent;
    @ViewChild('gauge5', { read: GaugeComponent, static: false }) gauge5!: GaugeComponent;
    @ViewChild('gauge6', { read: GaugeComponent, static: false }) gauge6!: GaugeComponent;
    @ViewChild('gauge7', { read: GaugeComponent, static: false }) gauge7!: GaugeComponent;


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

        that.gauge2.ranges = [
            { startValue: 0, endValue: 25, className: 'range1' },
            { startValue: 25, endValue: 50, className: 'range2' },
            { startValue: 50, endValue: 75, className: 'range3' },
            { startValue: 75, endValue: 100, className: 'range4' }
        ];
        that.gauge3.ranges = [
            { startValue: 0, endValue: 19.5, className: 'range1' },
            { startValue: 20.5, endValue: 39.5, className: 'range2' },
            { startValue: 40.5, endValue: 59.5, className: 'range3' },
            { startValue: 60.5, endValue: 79.5, className: 'range4' },
            { startValue: 80.5, endValue: 100, className: 'range5' }
        ];
        that.gauge4.digitalDisplayPosition = 'bottom';
    }

    fuelGaugeLabelFormatFunction(value: string): string {
        switch (value) {
            case '0':
                return 'E';
            case '20':
                return '½';
            case '40':
                return 'F';
            default:
                return ' ';
        }
    }
}