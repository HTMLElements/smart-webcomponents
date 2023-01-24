import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GanttChartComponent } from 'smart-webcomponents-angular/ganttchart';
import { DropDownList } from 'smart-webcomponents-angular/dropdownlist';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('ganttchart', { read: GanttChartComponent, static: false }) ganttChart!: GanttChartComponent;

    treeSize: string = '35%';

    taskColumns: Array<object> = [
        {
            label: 'Tasks',
            value: 'label',
            size: '35%'
        },
        {
            label: 'Start Date',
            value: 'dateStart',
            size: '35%'
        },
        {
            label: 'Duration (Hours)',
            value: 'duration',
            formatFunction: (date: any): number => parseInt(date),
            customEditor: function (label: string, value: string): DocumentFragment {
                let fragment = document.createDocumentFragment(),
                    customEditorLabel = document.createElement('label'),
                    dropDownList = document.createElement('smart-drop-down-list');

                customEditorLabel.innerHTML = 'Duration';
                dropDownList.dropDownAppendTo = 'body';
                dropDownList.dataSource = [4, 8, 12];

                fragment.appendChild(customEditorLabel);
                fragment.appendChild(dropDownList);

                return fragment;
            },
            setCustomEditorValue: function (editor: HTMLElement, label: string, value: any): void {
                const dropDownList = editor.querySelector('smart-drop-down-list') as DropDownList;

                dropDownList.select(value.toString());
            },
            getCustomEditorValue: function (editor: HTMLElement): string {
                const dropDownList = editor.querySelector('smart-drop-down-list') as DropDownList;

                return dropDownList.selectedValues[0];
            }
        }
    ];

    dataSource: Array<object> = [
        {
            label: 'John',
            dateStart: '2021-06-17T06:30:00',
            connections: [
                {
                    target: 1,
                    type: 1
                }
            ],
            duration: 8,
            class: 'john',
            type: 'task'
        },
        {
            label: 'Jane',
            dateStart: '2021-06-18T09:00:00',
            connections: [
                {
                    target: 2,
                    type: 1
                }
            ],
            duration: 8,
            class: 'jane',
            type: 'task'
        },
        {
            label: 'Peter',
            dateStart: '2021-06-19T07:30:00',
            connections: [
                {
                    target: 3,
                    type: 1
                }
            ],
            duration: 8,
            class: 'peter',
            type: 'task'
        },
        {
            label: 'Melania',
            dateStart: '2021-06-20T10:00:00',
            connections: [
                {
                    target: 4,
                    type: 1
                }
            ],
            duration: 8,
            class: 'melania',
            type: 'task'
        },
        {
            label: 'Donald',
            dateStart: '2021-06-21T08:30:00',
            connections: [
                {
                    target: 5,
                    type: 1
                }
            ],
            duration: 8,
            class: 'donald',
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

    }
}