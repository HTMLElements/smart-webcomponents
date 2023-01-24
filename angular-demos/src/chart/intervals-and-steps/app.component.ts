import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { NumericTextBoxComponent } from 'smart-webcomponents-angular/numerictextbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2!: CheckBoxComponent;
    @ViewChild('numerictextbox', { read: NumericTextBoxComponent, static: false }) numerictextbox!: NumericTextBoxComponent;
    @ViewChild('numerictextbox2', { read: NumericTextBoxComponent, static: false }) numerictextbox2!: NumericTextBoxComponent;
    @ViewChild('numerictextbox3', { read: NumericTextBoxComponent, static: false }) numerictextbox3!: NumericTextBoxComponent;
    @ViewChild('numerictextbox4', { read: NumericTextBoxComponent, static: false }) numerictextbox4!: NumericTextBoxComponent;
    @ViewChild('numerictextbox5', { read: NumericTextBoxComponent, static: false }) numerictextbox5!: NumericTextBoxComponent;
    @ViewChild('numerictextbox6', { read: NumericTextBoxComponent, static: false }) numerictextbox6!: NumericTextBoxComponent;
    @ViewChild('numerictextbox7', { read: NumericTextBoxComponent, static: false }) numerictextbox7!: NumericTextBoxComponent;
    @ViewChild('numerictextbox8', { read: NumericTextBoxComponent, static: false }) numerictextbox8!: NumericTextBoxComponent;

    sampleData = [12, 3, 16, 12, 24, 15, 17, 9, 31, 25, 15, 5, 8, 19, 23, 15, 31, 26, 11, 19, 5, 1, 8, 18, 12, 3, 16, 12, 24, 15, 17, 9, 31, 25, 15, 5, 8, 19, 23, 15, 31, 26, 11, 19, 5, 1, 8, 18, 5, 12, 11];
    animation = 'none';
    caption = 'Chart unitInterval and steps example';
    description = '';
    showLegend = true;
    enableCrosshairs = false;
    padding = { left: 10, top: 5, right: 10, bottom: 5 };
    titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    dataSource = this.sampleData;
    xAxis = {
        unitInterval: 1,
        gridLines: { step: 1 },
        tickMarks: { step: 1 },
        labels: { step: 2 }
    };
    valueAxis = {
        title: { text: 'Value<br>' },
        unitInterval: 5,
        gridLines: { step: 1 },
        tickMarks: { step: 1 },
        labels: { step: 1 },
        minValue: 0
    };
    colorScheme = 'scheme05';
    seriesGroups = [
        {
            type: 'line',
            series: [
                { displayText: 'value', opacity: 0.7 }
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

        that.numerictextbox.addEventListener('change', function (event: CustomEvent) {
            const value = parseFloat(event.detail.value);
            if (that.chart.xAxis && that.chart.xAxis.labels) {
                that.chart.xAxis.labels.step = value;
            }
        });
        that.numerictextbox2.addEventListener('change', function (event: CustomEvent) {
            const value = parseFloat(event.detail.value);
            if (that.chart.xAxis && that.chart.xAxis.gridLines) {
                that.chart.xAxis.gridLines.step = value;
            }
        });
        that.numerictextbox3.addEventListener('change', function (event: CustomEvent) {
            const value = parseFloat(event.detail.value);
            if (that.chart.xAxis && that.chart.xAxis.tickMarks) {
                that.chart.xAxis.tickMarks.step = value;
            }
        });
        that.numerictextbox4.addEventListener('change', function (event: CustomEvent) {
            const value = parseFloat(event.detail.value);
            if (that.chart.xAxis) {
                that.chart.xAxis.unitInterval = value;
            }
        });
        that.checkbox.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.xAxis) {
                that.chart.xAxis.valuesOnTicks = !event.detail.value;
            }
        });
        that.numerictextbox5.addEventListener('change', function (event: CustomEvent) {
            const value = parseFloat(event.detail.value);
            if (that.chart.valueAxis && that.chart.valueAxis.labels) {
                that.chart.valueAxis.labels.step = value;
            }
        });
        that.numerictextbox6.addEventListener('change', function (event: CustomEvent) {
            const value = parseFloat(event.detail.value);
            if (that.chart.valueAxis && that.chart.valueAxis.gridLines) {
                that.chart.valueAxis.gridLines.step = value;
            }
        });
        that.numerictextbox7.addEventListener('change', function (event: CustomEvent) {
            const value = parseFloat(event.detail.value);
            if (that.chart.valueAxis && that.chart.valueAxis.tickMarks) {
                that.chart.valueAxis.tickMarks.step = value;
            }
        });
        that.numerictextbox8.addEventListener('change', function (event: CustomEvent) {
            const value = parseFloat(event.detail.value);
            if (that.chart.valueAxis) {
                that.chart.valueAxis.unitInterval = value;
            }
        });
        that.checkbox2.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.valueAxis) {
                that.chart.valueAxis.valuesOnTicks = !event.detail.value;
            }
        });
    }
}