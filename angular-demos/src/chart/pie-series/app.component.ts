import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;

    source = [{ Browser: 'Chrome', Share: 68.95 }, { Browser: 'Firefox', Share: 10.67 }, { Browser: 'Internet Explorer', Share: 6.42 }, { Browser: 'Safari', Share: 5.35 }, { Browser: 'Edge', Share: 4.2 }, { Browser: 'Other', Share: 4.67 }];
    caption = 'Desktop browsers share';
    description = '(source: gs.statcounter.com)';
    showLegend = true;
    showBorderLine = true;
    legendPosition = { left: 520, top: 140, width: 100, height: 100 };
    padding = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };
    dataSource = this.source;
    seriesGroups = [
        {
            type: 'pie',
            showLabels: true,
            series: [
                {
                    dataField: 'Share',
                    displayText: 'Browser',
                    labelRadius: 120,
                    initialAngle: 15,
                    radius: 170,
                    centerOffset: 0,
                    formatFunction: function (value) {
                        if (isNaN(value)) {
                            // Legend labels formatting
                            return value;
                        }
                        return parseFloat(value) + '%';
                    },
                    useGradientColors: false
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
    }
}