import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { NumericTextBoxComponent } from 'smart-webcomponents-angular/numerictextbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
    @ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
    @ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
    @ViewChild('button7', { read: ButtonComponent, static: false }) button7!: ButtonComponent;
    @ViewChild('button8', { read: ButtonComponent, static: false }) button8!: ButtonComponent;
    @ViewChild('button9', { read: ButtonComponent, static: false }) button9!: ButtonComponent;
    @ViewChild('button10', { read: ButtonComponent, static: false }) button10!: ButtonComponent;
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;
    @ViewChild('numerictextbox', { read: NumericTextBoxComponent, static: false }) numerictextbox!: NumericTextBoxComponent;
    @ViewChild('numerictextbox2', { read: NumericTextBoxComponent, static: false }) numerictextbox2!: NumericTextBoxComponent;

    sampleData = [
        { Year: 2001, Austria: 120.61, Belgium: 116.12, Croatia: 45.11 },
        { Year: 2002, Austria: 118.96, Belgium: 109.37, Croatia: 53.19 },
        { Year: 2003, Austria: 118.06, Belgium: 105.45, Croatia: 54.39 },
        { Year: 2004, Austria: 118.56, Belgium: 99.62, Croatia: 56.83 },
        { Year: 2005, Austria: 125.98, Belgium: 100.75, Croatia: 62.85 },
        { Year: 2006, Austria: 125.66, Belgium: 106, Croatia: 68.59 },
        { Year: 2007, Austria: 122.7, Belgium: 108.79, Croatia: 70.76 },
        { Year: 2008, Austria: 126.3, Belgium: 110.6, Croatia: 73.9 },
        { Year: 2009, Austria: 135.09, Belgium: 116.05, Croatia: 77.38 },
        { Year: 2010, Austria: 135.06, Belgium: 113.68, Croatia: 90.49 },
        { Year: 2011, Austria: 132.09, Belgium: 114, Croatia: 88.71 },
        { Year: 2012, Austria: 135.25, Belgium: 113.23, Croatia: 88.53 },
        { Year: 2013, Austria: 130.43, Belgium: 112.06, Croatia: 89.57 },
        { Year: 2014, Austria: 125.43, Belgium: 154.55, Croatia: 89.46 },
        { Year: 2015, Austria: 123.44, Belgium: 148.03, Croatia: 87.48 },
        { Year: 2016, Austria: 129.89, Belgium: 153.69, Croatia: 84.9 },
        { Year: 2017, Austria: 126.73, Belgium: 135.66, Croatia: 77.02 }
    ];
    clip = false;
    caption = 'Domestic credit provided by banking sector';
    description = '(% of GDP)';
    showLegend = true;
    padding = { left: 10, top: 5, right: 10, bottom: 5 };
    titlePadding = { left: 50, top: 0, right: 0, bottom: 10 };
    dataSource = this.sampleData;
    colorScheme = 'scheme29';
    xAxis = {
        dataField: 'Year',
        valuesOnTicks: true
    };
    valueAxis = {
        visible: true,
        title: { text: '% of GDP' },
        labels: {
            formatSettings: { sufix: '%' }
        }
    };
    seriesGroups = [
        {
            type: 'spline',
            series: [
                { dataField: 'Austria', opacity: 0.8, symbolType: 'circle', symbolSize: 10 },
                { dataField: 'Belgium', opacity: 0.7, symbolType: 'square', symbolSize: 10 },
                { dataField: 'Croatia', opacity: 0.6, symbolType: 'diamond', symbolSize: 10 }
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

        that.button.addEventListener('click', function () {
            const series = parseFloat(that.numerictextbox.value),
                count = that.chart.getItemsCount(0, series);
            alert(`Series ${series} has ${count} items.`);
        });
        that.button2.addEventListener('click', function () {
            const series = parseFloat(that.numerictextbox.value),
                item = parseFloat(that.numerictextbox2.value),
                coords = that.chart.getItemCoord(0, series, item);
            alert(`The coordinates of item ${item} from series ${series} are (${coords.x}, ${coords.y}).`);
        });
        that.button3.addEventListener('click', function () {
            const series = parseFloat(that.numerictextbox.value);
            that.chart.showSerie(0, series);
        });
        that.button4.addEventListener('click', function () {
            const series = parseFloat(that.numerictextbox.value);
            that.chart.hideSerie(0, series);
        });
        that.button5.addEventListener('click', function () {
            const series = parseFloat(that.numerictextbox.value), item = parseFloat(that.numerictextbox2.value);
            that.chart.showToolTip(0, series, item);
        });
        that.button6.addEventListener('click', function () {
            that.chart.hideToolTip();
        });
        that.button7.addEventListener('click', function () {
            const rect = that.chart.getXAxisRect(0);
            alert(`The xAxis rect starts at (${rect.x}, ${rect.y}) and has width ${rect.width}px and height ${rect.height}px.`);
        });
        that.button8.addEventListener('click', function () {
            const labels = that.chart.getXAxisLabels(0);
            alert(`The xAxis labels are ${labels.map(label => label.value).join(', ')}.`);
        });
        that.button9.addEventListener('click', function () {
            const rect = that.chart.getValueAxisRect(0);
            alert(`The valueAxis rect starts at (${rect.x}, ${rect.y}) and has width ${rect.width}px and height ${rect.height}px.`);
        });
        that.button10.addEventListener('click', function () {
            const labels = that.chart.getValueAxisLabels(0);
            alert(`The valueAxis labels are ${labels.map(label => label.value).join(', ')}.`);
        });
    }
}