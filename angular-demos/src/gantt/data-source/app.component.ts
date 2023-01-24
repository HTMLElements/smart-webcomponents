import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GanttChartComponent, GanttChartView, Duration, GanttChartTaskColumn } from 'smart-webcomponents-angular/ganttchart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;
    @ViewChild('log', { read: ElementRef , static: false }) log!: ElementRef;

    view: GanttChartView = 'month';

    treeSize: String = '25%';

    durationUnit: Duration = 'day';

    taskColumns: GanttChartTaskColumn[] = [{
        label: 'Book Plan',
        value: 'label',
        size: '60%'
    },
    {
        label: 'Duration (days)',
        value: 'duration',
        formatFunction: (duration: number) => Math.round(duration)
    }
    ];

    timelineHeaderFormatFunction: Function = function (date: Date, type: String, isHeaderDetails: Boolean, defaultValue: String) {
        const ganttChart = document.querySelector('smart-gantt-chart');

        if (isHeaderDetails) {
            return date.toLocaleDateString(ganttChart.locale, {
                month: 'short',
                year: 'numeric'
            });
        }
        else {
            return '#' + defaultValue;
        }
    };

    dataSource = new window.Smart.DataAdapter({
        dataSource: [
            {
                id: 0,
                label: 'Chapter 1',
                synchronized: true,
                expanded: true,
                type: 'project'
            },
            {
                id: 1,
                reportsTo: 0,
                label: 'Section 1.1',
                dateStart: '2021-01-01',
                duration: 30,
                progress: 35,
                type: 'task'
            },
            {
                id: 2,
                reportsTo: 0,
                label: 'Section 1.2',
                dateStart: '2021-02-01',
                progress: 25,
                duration: 30,
                type: 'task'
            },
            {
                id: 3,
                reportsTo: 0,
                label: 'Section 1.3',
                dateStart: '2021-02-01',
                progress: 10,
                duration: 30,
                type: 'task'
            },
            {
                id: 4,
                label: 'End of Chapter 1',
                dateStart: '2021-03-01',
                type: 'milestone'
            },
            {
                id: 5,
                label: 'Chapter 2',
                synchronized: true,
                expanded: true,
                type: 'project',
            },
            {
                id: 6,
                reportsTo: 5,
                label: 'Section 2.1',
                dateStart: '2021-03-01',
                duration: 30,
                progress: 15,
                type: 'task'
            },
            {
                id: 7,
                reportsTo: 5,
                label: 'Section 2.2',
                dateStart: '2021-04-01',
                progress: 10,
                duration: 30,
                type: 'task'
            },
            {
                id: 8,
                reportsTo: 5,
                label: 'Section 2.3',
                dateStart: '2021-05-01',
                progress: 20,
                duration: 30,
                type: 'task'
            },
            {
                id: 9,
                label: 'End of Chapter 2',
                dateStart: '2021-06-01',
                type: 'milestone'
            }
        ],
        keyDataField: 'id',
        parentDataField: 'reportsTo',
        id: 'id',
        dataFields: [
            'id: number',
            'label: string',
            'dateStart: date',
            'dateEnd: any',
            'type: string',
            'duration: any',
            'progress: any',
            'reportsTo: any',
            'synchronized: boolean',
            'expanded: boolean',
        ]
    })

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
            button = this.button,
            log = this.log;

        button.addEventListener('click', function (event) {
            log.nativeElement.innerHTML = JSON.stringify(ganttChart.tasks, null, 4);
        });
    }
}