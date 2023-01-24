import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;

    sourceMobile = [{ Browser: 'Chrome', Share: 54.84 }, { Browser: 'Safari', Share: 19.16 }, { Browser: 'UC Browser', Share: 11.33 }, { Browser: 'Samsung Internet', Share: 5.71 }, { Browser: 'Opera', Share: 4.53 }, { Browser: 'Android', Share: 1.87 }, { Browser: 'Other', Share: 2.56 }];
    caption = 'Mobile browsers share';
    description = '(source: gs.statcounter.com)';
    showLegend = true;
    showBorderLine = true;
    legendLayout = { left: 700, top: 160, width: 300, height: 200, flow: 'vertical' };
    padding = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };
    dataSource = this.sourceMobile;
    colorScheme = 'scheme31';
    seriesGroups = [
        {
            type: 'pie',
            showLabels: true,
            series: [
                {
                    dataField: 'Share',
                    displayText: 'Browser',
                    labelRadius: 170,
                    initialAngle: 15,
                    radius: 145,
                    centerOffset: 0,
                    formatFunction: function (value: any) {
                        if (isNaN(value))
                            return value;
                        return parseFloat(value) + '%';
                    },
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