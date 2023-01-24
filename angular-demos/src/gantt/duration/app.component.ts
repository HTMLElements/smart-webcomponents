import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GanttChartComponent, Duration } from 'smart-webcomponents-angular/ganttchart';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;

    dataSource: Array<object> = [
        {
            type: 'project',
            label: 'Project 1',
            dateStart: '2021-5-10',
            dateEnd: '2021-7-10',
            minDuration: 60
        },
        {
            type: 'task',
            label: 'Task 2',
            dateStart: '2021-6-5',
            dateEnd: '2021-8-10',
            minDuration: 10,
            maxDuration: 60
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

        const that = this,
            ganttChart = that.ganttchart;

        that.radiobutton.addEventListener('change', function (event: CustomEvent): void {
            if (event.detail.value) {
                ganttChart.durationUnit = (<HTMLElement>event.target).innerHTML as Duration;
            }
        });

        that.radiobutton2.addEventListener('change', function (event: CustomEvent): void {
            if (event.detail.value) {
                ganttChart.durationUnit = (<HTMLElement>event.target).innerHTML as Duration;
            }
        });
    }
}