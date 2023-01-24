import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GanttChartComponent, GanttChartTaskColumn, GanttChartView } from 'smart-webcomponents-angular/ganttchart';
import { NumberInputComponent, NumberInput } from 'smart-webcomponents-angular/numberinput';
import { SwitchButtonComponent, SwitchButton } from 'smart-webcomponents-angular/switchbutton';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;
    @ViewChild('numberinput', { read: NumberInputComponent, static: false }) numberinput!: NumberInputComponent;
    @ViewChild('switchbutton', { read: SwitchButtonComponent, static: false }) switchbutton!: SwitchButtonComponent;
    @ViewChild('switchbutton2', { read: SwitchButtonComponent, static: false }) switchbutton2: SwitchButtonComponent;

    today: Date = new Date();
    year: number = this.today.getFullYear();
    month: number = this.today.getMonth();
    date: number = this.today.getDate();

    view: GanttChartView = 'week';

    shadeUntilCurrentTime: boolean = true;

    currentTimeIndicator: boolean = true;

    currentTimeIndicatorInterval: number = 60;

    dateStart: Date = new Date(this.year, this.month, this.date - 3);

    dateEnd: Date = new Date(this.year, this.month, this.date + 9);

    taskColumns: GanttChartTaskColumn[] = [
        {
            label: 'Tasks',
            value: 'label'
        }
    ];

    dataSource: any = [
        {
            label: 'PRD & User-Stories',
            dateStart: new Date(this.year, this.month, this.date - 2),
            dateEnd: new Date(this.year, this.month, this.date - 1),
            class: 'product-team',
            type: 'task'
        },
        {
            label: 'Persona & Journey',
            dateStart: new Date(this.year, this.month, this.date - 1),
            dateEnd: new Date(this.year, this.month, this.date),
            class: 'marketing-team',
            type: 'task'
        },
        {
            label: 'Architecture',
            dateStart: new Date(this.year, this.month, this.date),
            dateEnd: new Date(this.year, this.month, this.date + 1),
            class: 'product-team',
            type: 'task'
        },
        {
            label: 'Prototyping',
            dateStart: new Date(this.year, this.month, this.date + 1),
            dateEnd: new Date(this.year, this.month, this.date + 2),
            class: 'dev-team',
            type: 'task'
        },
        {
            label: 'Design',
            dateStart: new Date(this.year, this.month, this.date + 2),
            dateEnd: new Date(this.year, this.month, this.date + 3),
            class: 'design-team',
            type: 'task'
        },
        {
            label: 'Development',
            dateStart: new Date(this.year, this.month, this.date + 3),
            dateEnd: new Date(this.year, this.month, this.date + 4),
            class: 'dev-team',
            type: 'task'
        },
        {
            label: 'Testing & QA',
            dateStart: new Date(this.year, this.month, this.date + 4),
            dateEnd: new Date(this.year, this.month, this.date + 5),
            class: 'qa-team',
            type: 'task'
        },
        {
            label: 'UAT Test',
            dateStart: new Date(this.year, this.month, this.date + 5),
            dateEnd: new Date(this.year, this.month, this.date + 6),
            class: 'product-team',
            type: 'task'
        },
        {
            label: 'Handover & Documentation',
            dateStart: new Date(this.year, this.month, this.date + 6),
            dateEnd: new Date(this.year, this.month, this.date + 7),
            class: 'marketing-team',
            type: 'task'
        },
        {
            label: 'Release',
            dateStart: new Date(this.year, this.month, this.date + 7),
            dateEnd: new Date(this.year, this.month, this.date + 8),
            class: 'release-team',
            type: 'task'
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

        const ganttChart = this.ganttchart;

        document.querySelector('.options').addEventListener('change', function (event: CustomEvent) {
            const target = event.target as SwitchButton | NumberInput;
            
            if (target.id === 'currentTimeIndicator') {
                ganttChart.currentTimeIndicator = target.checked;
                return;
            }

            if (target.id === 'shadeUntilCurrentTime') {
                ganttChart.shadeUntilCurrentTime = target.checked;
                return;
            }

            if (target instanceof window.Smart.NumberInput) {
                ganttChart[target.id] = parseInt(target.value);
            }
        });
    };
}