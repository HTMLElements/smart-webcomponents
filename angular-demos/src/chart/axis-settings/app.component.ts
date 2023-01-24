import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
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
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
    @ViewChild('radiobutton4', { read: RadioButtonComponent, static: false }) radiobutton4!: RadioButtonComponent;
    @ViewChild('slider', { read: SliderComponent, static: false }) slider!: SliderComponent;
    @ViewChild('slider2', { read: SliderComponent, static: false }) slider2!: SliderComponent;
    @ViewChild('slider3', { read: SliderComponent, static: false }) slider3!: SliderComponent;
    @ViewChild('slider4', { read: SliderComponent, static: false }) slider4!: SliderComponent;
    @ViewChild('slider5', { read: SliderComponent, static: false }) slider5!: SliderComponent;
    @ViewChild('slider6', { read: SliderComponent, static: false }) slider6!: SliderComponent;

    data = [
        { year: 2004, price: 0.1437 },
        { year: 2005, price: 0.1470 },
        { year: 2006, price: 0.1510 },
        { year: 2007, price: 0.1605 },
        { year: 2008, price: 0.1647 },
        { year: 2009, price: 0.1736 },
        { year: 2010, price: 0.1766 },
        { year: 2011, price: 0.1902 },
        { year: 2012, price: 0.1978 },
        { year: 2017, price: 0.2113 },
        { year: 2018, price: 0.2178 }
    ];
    renderEngine = 'HTML5';
    caption = 'Electricity prices in Europe between 2004 and 2018';
    description = 'dataSource: Eurostat';
    showLegend = true;
    padding = { left: 5, top: 5, right: 15, bottom: 5 };
    titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    dataSource = this.data;
    xAxis = {
        padding: { top: 0, bottom: 0 },
        labels: { angle: 0 },
        dataField: 'year',
        displayText: 'Year',
        valuesOnTicks: false,
        gridLines: { color: '#CDCDCD' },
        tickMarks: { color: '#CDCDCD' }
    };
    colorScheme = 'scheme32';
    valueAxis = {
        position: 'right',
        padding: { left: 0, right: 0 },
        title: { text: '<br><br>Price EUR / kWh' },
        labels: {
            visible: true,
            angle: 0,
            formatSettings: { decimalPlaces: 4, sufix: ' €' }
        },
        tickMarks: {
            visible: true,
            color: '#CDCDCD',
            size: 5
        },
        gridLines: {
            visible: true,
            color: '#CDCDCD'
        },
        alternatingBackgroundColor: '#EFEFEF',
        alternatingBackgroundColor2: '#CECECE',
        alternatingBackgroundOpacity: 0.2
    };
    seriesGroups = [
        {
            type: 'stepline',
            series: [
                {
                    formatSettings: { decimalPlaces: 4 },
                    dataField: 'price',
                    displayText: 'Price per kWh',
                    labels: {
                        visible: true
                    },
                    symbolType: 'circle'
                }
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
            if (that.chart.valueAxis && that.chart.valueAxis.padding) {
                that.chart.valueAxis.padding.left = parseFloat(event.detail.value);
            }
        });
        that.slider2.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.valueAxis && that.chart.valueAxis.padding) {
                that.chart.valueAxis.padding.right = parseFloat(event.detail.value);
            }
        });
        that.slider3.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.valueAxis && that.chart.valueAxis.labels) {
                that.chart.valueAxis.labels.angle = parseFloat(event.detail.value);
            }
        });
        that.slider4.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.xAxis && that.chart.xAxis.padding) {
                that.chart.xAxis.padding.top = parseFloat(event.detail.value);
            }
        });
        that.slider5.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.xAxis && that.chart.xAxis.padding) {
                that.chart.xAxis.padding.bottom = parseFloat(event.detail.value);
            }
        });
        that.slider6.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.xAxis && that.chart.xAxis.labels) {
                that.chart.xAxis.labels.angle = parseFloat(event.detail.value);
            }
        });
        that.radiobutton.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value && that.chart.valueAxis) {
                that.chart.valueAxis.position = 'left';
            }
        });
        that.radiobutton2.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value && that.chart.valueAxis) {
                that.chart.valueAxis.position = 'right';
            }
        });
        that.radiobutton3.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value && that.chart.xAxis) {
                that.chart.xAxis.position = 'top';
            }
        });
        that.radiobutton4.addEventListener('change', function (event: CustomEvent) {
            if (event.detail.value && that.chart.xAxis) {
                that.chart.xAxis.position = 'bottom';
            }
        });
        that.checkbox.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.valueAxis) {
                that.chart.valueAxis.flip = event.detail.value;
            }
        });
        that.checkbox2.addEventListener('change', function (event: CustomEvent) {
            if (that.chart.xAxis) {
                that.chart.xAxis.flip = event.detail.value;
            }
        });
    }
}