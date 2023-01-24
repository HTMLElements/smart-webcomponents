import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { GanttChartComponent, GanttChartView, Duration, GanttChartTaskColumn } from 'smart-webcomponents-angular/ganttchart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;
    @ViewChild('log', { read: ElementRef, static: false }) log!: ElementRef;

    view: GanttChartView = 'week';

    durationUnit: Duration = 'day';

    taskColumns: GanttChartTaskColumn[] = [{
        label: 'Name',
        value: 'label'
    }];

    dataSource = [{
        label: 'Task A',
        dateStart: '2021-01-15',
        duration: 10
    },
    {
        label: 'Task B',
        dateStart: '2021-01-14',
        duration: 6
    },
    {
        label: 'Task C',
        dateStart: '2021-01-16',
        duration: 4
    },
    {
        label: 'Task D',
        dateStart: '2021-01-13',
        duration: 12
    },
    {
        label: 'Task E',
        dateStart: '2021-01-18',
        duration: 7
    },
    {
        label: 'Task F',
        dateStart: '2021-01-15T00:00:00',
        duration: 15
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

        const ganttChart = this.ganttchart,
            log = this.log.nativeElement,
            eventNames = ['change', 'opening', 'closing', 'open', 'close', 'dragStart', 'dragEnd',
                'resizeStart', 'resizeEnd', 'progressChangeStart', 'progressChangeEnd', 'connectionStart', 'connectionEnd',
                'itemRemove', 'itemInsert', 'itemUpdate', 'itemClick'];

        for (let i = 0; i < eventNames.length; i++) {
            ganttChart.addEventListener(eventNames[i], function (e) {
                log.innerHTML += e.type + '<br />';
            });
        }


    }
}