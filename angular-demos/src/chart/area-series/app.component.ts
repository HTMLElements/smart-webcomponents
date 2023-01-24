import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;

    sampleData = [
        { Year: 2003, Austria: 120.61, Belgium: 116.12, Croatia: 45.11 },
        { Year: 2004, Austria: 118.96, Belgium: 109.37, Croatia: 53.19 },
        { Year: 2005, Austria: 118.06, Belgium: 105.45, Croatia: 54.39 },
        { Year: 2006, Austria: 118.56, Belgium: 99.62, Croatia: 56.83 },
        { Year: 2007, Austria: 125.98, Belgium: 100.75, Croatia: 62.85 },
        { Year: 2008, Austria: 125.66, Belgium: 106, Croatia: 68.59 },
        { Year: 2009, Austria: 122.7, Belgium: 108.79, Croatia: 70.76 },
        { Year: 2010, Austria: 126.3, Belgium: 110.6, Croatia: 73.9 },
        { Year: 2011, Austria: 135.09, Belgium: 116.05, Croatia: 77.38 },
        { Year: 2012, Austria: 135.06, Belgium: 113.68, Croatia: 90.49 },
        { Year: 2013, Austria: 132.09, Belgium: 114, Croatia: 88.71 },
        { Year: 2014, Austria: 135.25, Belgium: 113.23, Croatia: 88.53 },
        { Year: 2015, Austria: 130.43, Belgium: 112.06, Croatia: 89.57 },
        { Year: 2016, Austria: 125.43, Belgium: 154.55, Croatia: 89.46 },
        { Year: 2017, Austria: 123.44, Belgium: 148.03, Croatia: 87.48 },
        { Year: 2018, Austria: 129.89, Belgium: 153.69, Croatia: 84.9 },
        { Year: 2019, Austria: 126.73, Belgium: 135.66, Croatia: 77.02 }
    ];
    clip = false;
    caption = 'Domestic credit provided by banking sector';
    description = '(% of GDP)';
    showLegend = true;
    padding = { left: 20, top: 5, right: 20, bottom: 5 };
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
            type: 'area',
            series: [
                { dataField: 'Austria', opacity: 0.8 },
                { dataField: 'Belgium', opacity: 0.7 },
                { dataField: 'Croatia', opacity: 0.6 }
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
    }
}