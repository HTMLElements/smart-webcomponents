import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { SliderComponent } from 'smart-webcomponents-angular/slider';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2!: CheckBoxComponent;
    @ViewChild('slider', { read: SliderComponent, static: false }) slider!: SliderComponent;
    @ViewChild('slider2', { read: SliderComponent, static: false }) slider2!: SliderComponent;
    @ViewChild('slider3', { read: SliderComponent, static: false }) slider3!: SliderComponent;
    @ViewChild('slider4', { read: SliderComponent, static: false }) slider4!: SliderComponent;

    sampleData = [
        { City: 'London', SalesCountJan: 210, SalesRevenueJan: 123 },
        { City: 'Madrid', SalesCountJan: 190, SalesRevenueJan: 114 },
        { City: 'Munich', SalesCountJan: 201, SalesRevenueJan: 112 },
        { City: 'Amsterdam', SalesCountJan: 110, SalesRevenueJan: 98 },
        { City: 'Paris', SalesCountJan: 105, SalesRevenueJan: 93 },
        { City: 'Prague', SalesCountJan: 54, SalesRevenueJan: 100 }
    ];
    caption = "Sales volume and revenue by city";
    description = "(revenue in thousands)";
    animation = 'none';
    showLegend = true;
    padding = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding = { left: 0, top: 0, right: 0, bottom: 5 };
    colorScheme = 'scheme01';
    dataSource = this.sampleData;
    xAxis = {
        dataField: 'City',
        valuesOnTicks: true,
        labels: { autoRotate: true }
    };
    valueAxis = {
        labels: {
            formatSettings: { decimalPlaces: 0 },
            autoRotate: true
        }
    };
    seriesGroups = [
        {
            polar: true,
            endAngle: 270,
            radius: 120,
            type: 'line',
            series: [
                { dataField: 'SalesCountJan', displayText: 'Sales count', opacity: 0.7, lineWidth: 1, radius: 2, symbolType: 'circle' },
                { dataField: 'SalesRevenueJan', displayText: 'Revenue', opacity: 0.7, lineWidth: 1, radius: 2, symbolType: 'square' }
            ]
        }
    ];

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

        that.slider.addEventListener('change', function (event: CustomEvent) {
            const value = parseFloat(event.detail.value);
            that.chart.seriesGroups[0].startAngle = value;
            that.chart.update();
        });
        that.slider2.addEventListener('change', function (event: CustomEvent) {
            const value = parseFloat(event.detail.value);
            that.chart.seriesGroups[0].endAngle = value;
            that.chart.update();
        });
        that.slider3.addEventListener('change', function (event: CustomEvent) {
            const value = parseFloat(event.detail.value);
            if (!that.chart.seriesGroups && !that.chart.seriesGroups[0]) {
                return;
            }
            if (that.chart.seriesGroups[0]) {
                let startAngle = that.chart.seriesGroups[0].startAngle || 0,
                    endAngle = that.chart.seriesGroups[0].endAngle || 0;
                if (isNaN(endAngle)) {
                    endAngle = 360;
                }
                if (isNaN(startAngle)) {
                    startAngle = 0;
                }
                const diff = endAngle - startAngle;
                that.chart.seriesGroups[0].startAngle = value;
                that.chart.seriesGroups[0].endAngle = value + diff;
                that.chart.update();
            }
        });
        that.slider4.addEventListener('change', function (event: CustomEvent) {
            const value = parseFloat(event.detail.value);
            that.chart.seriesGroups[0].radius = value;
            that.chart.update();
        });
        that.checkbox.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.xAxis && that.chart.xAxis.labels) {
                that.chart.xAxis.labels.autoRotate = event.detail.value;
            }
            if (that.chart.valueAxis && that.chart.valueAxis.labels) {
                that.chart.valueAxis.labels.autoRotate = event.detail.value;
            }
        });
        that.checkbox2.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.xAxis) {
                that.chart.xAxis.valuesOnTicks = !event.detail.value;
            }
        });
    }
}