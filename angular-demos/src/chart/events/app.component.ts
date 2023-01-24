import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('chart', { read: ChartComponent, static: false }) chart!: ChartComponent;
    @ViewChild('eventText', { read: ElementRef, static: false }) eventText: ElementRef;

    sampleData = [
        { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
        { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
        { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
        { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
        { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
        { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
        { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
    ];
    caption = 'Fitness & exercise weekly scorecard';
    description = 'Time spent in vigorous exercise';
    padding = { left: 5, top: 5, right: 5, bottom: 5 };
    titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    dataSource = this.sampleData;
    xAxis = {
        dataField: 'Day',
        type: 'basic'
    };
    colorScheme = 'scheme32';
    showToolTips = false;
    seriesGroups = [
        {
            type: 'column',
            valueAxis: {
                minValue: 0,
                maxValue: 100,
                unitInterval: 10,
                title: { text: 'Time in minutes' }
            },
            series: [
                { dataField: 'Keith', displayText: 'Keith' },
                { dataField: 'Erica', displayText: 'Erica' },
                { dataField: 'George', displayText: 'George' }
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

        function myEventHandler(event: any) {
            const eventDetail = event.detail;
            if (!eventDetail) {
                return;
            }
            let eventData = '<div><b>Last Event: </b>' + event.type + '<b>, Serie DataField: </b>' + eventDetail.serie.dataField + '<b>, Value: </b>' + eventDetail.elementValue + '</div>';
            if (event.type === 'toggle') {
                eventData = '<div><b>Last Event: </b>' + event.type + '<b>, Serie DataField: </b>' + eventDetail.serie.dataField + '<b>, visible: </b>' + eventDetail.state + '</div>';
            }
            that.eventText.nativeElement.innerHTML = eventData;
        }

        that.chart.addEventListener('mouseout', function (event: PointerEvent) {
            myEventHandler(event);
        });
        that.chart.addEventListener('mouseover', function (event: PointerEvent) {
            myEventHandler(event);
        });
        that.chart.addEventListener('click', function (event: PointerEvent) {
            myEventHandler(event);
        });
        that.chart.addEventListener('toggle', function (event: CustomEvent) {
            myEventHandler(event);
        });
    }
}