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
            ranges = [];

        for (let i = 0; i < 20; i++) {
            ranges.push({ startValue: i, endValue: i + 1, className: 'range' + (i + 1) });
        }

        that.gauge3.ranges = ranges;
    }

    customDrawNeedleFunction1(element, renderer, radius, angle, distance): string[] {
        const sin = Math.sin(angle), cos = Math.cos(angle), x = radius + 101 * sin, y = radius + 101 * cos, circle = renderer.circle(x, y, 8, { 'class': 'value-circle' });
        // return an array of all custom SVG elements
        return [circle];
    }

    customDrawNeedleFunction2(element, renderer, radius, angle, distance): string[] {
        const width = 1, length = radius - distance - 19, sin = Math.sin(angle), cos = Math.cos(angle), endX1 = radius - width * cos + length * sin, endY1 = radius + width * sin + length * cos, endX2 = radius + width * cos + length * sin, endY2 = radius - width * sin + length * cos, startX1 = radius + width * cos, startY1 = radius - width * sin, startX2 = radius - width * cos, startY2 = radius + width * sin, points = 'M ' + startX1 + ',' + startY1 + ' L ' + startX2 + ',' + startY2 + ' L ' + endX1 + ',' + endY1 + ' ' + endX2 + ',' + endY2, needle = renderer.path(points, { 'class': 'value-needle' });
        // return an array of all custom SVG elements
        return [needle];
    }
}