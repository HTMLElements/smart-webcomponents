﻿import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { GanttChartComponent } from 'smart-webcomponents-angular/ganttchart';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;

    dataSource: Array<object> = [
        {
            type: 'project',
            label: 'Project 1',
            dateStart: '2021-5-2',
            duration: 60 * 24 * 60 * 60 * 1000,
            expanded: true,
            connections: [
                {
                    target: 1,
                    type: 0
                }
            ],
            tasks: [
                {
                    type: 'task',
                    label: 'Task 1.1',
                    dateStart: '2021-5-5',
                    duration: 10 * 24 * 60 * 60 * 1000,
                    connections: [
                        {
                            target: 2,
                            type: 1
                        }
                    ]
                },
                {
                    type: 'task',
                    label: 'Task 1.2',
                    dateStart: '2021-5-16',
                    duration: 12 * 24 * 60 * 60 * 1000,
                    connections: [
                        {
                            target: 3,
                            type: 1
                        }
                    ]
                },
                {
                    type: 'milestone',
                    label: 'Milestone 1',
                    dateStart: '2021-6-1',
                    connections: [
                        {
                            target: 4,
                            type: 1
                        }
                    ]
                },
                {
                    type: 'task',
                    label: 'Task 1.3',
                    dateStart: '2021-6-2',
                    duration: 90 * 24 * 60 * 60 * 1000 //90 days in miliseconds
                }
            ]
        },
        {
            type: 'project',
            label: 'Project 2',
            dateStart: '2021-10-1',
            duration: 60 * 24 * 60 * 60 * 1000,
            expanded: true,
            connections: [
                {
                    target: 6,
                    type: 0
                }
            ],
            tasks: [
                {
                    type: 'task',
                    label: 'Task 2.1',
                    dateStart: '2021-10-2',
                    duration: 15 * 24 * 60 * 60 * 1000,
                    connections: [
                        {
                            target: 7,
                            type: 0
                        }
                    ]
                },
                {
                    type: 'task',
                    label: 'Task 2.2',
                    dateStart: '2021-10-2',
                    duration: 10 * 24 * 60 * 60 * 1000,
                    connections: [
                        {
                            target: 8,
                            type: 1
                        }
                    ]
                },
                {
                    type: 'task',
                    label: 'Task 2.3',
                    dateStart: '2021-11-1',
                    duration: 45 * 24 * 60 * 60 * 1000 //45 days in miliseconds
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

        const that = this,
            ganttChart = that.ganttchart;

        that.checkbox.addEventListener('change', function (event: CustomEvent): void {
            ganttChart.inverted = event.detail.value;
        });
    }
}