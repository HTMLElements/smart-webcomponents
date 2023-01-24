import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { KanbanComponent } from 'smart-webcomponents-angular/kanban';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('kanban', { read: KanbanComponent, static: false }) kanban!: KanbanComponent;
    @ViewChild('kanban2', { read: KanbanComponent, static: false }) kanban2: KanbanComponent;

    selectionMode = 'zeroOrManyExtended';
    addNewButton = true;
    collapsible = true;
    columns = [
        { label: 'To do', dataField: 'toDo' },
        { label: 'In progress', dataField: 'inProgress' },
        { label: 'Done', dataField: 'done' }
    ];
    dataPhaseOne = [
        {
            id: 0,
            status: 'done',
            text: 'Research'
        }, {
            id: 1,
            status: 'done',
            text: 'Displaying data from data source'
        }, {
            id: 2,
            status: 'done',
            text: 'Showing cover and title'
        }, {
            id: 3,
            status: 'done',
            text: 'Property validation'
        }, {
            id: 4,
            status: 'done',
            text: 'formatFunction and formatSettings'
        }, {
            id: 5,
            status: 'inProgress',
            text: 'Expand/collapse arrow'
        }, {
            id: 6,
            status: 'inProgress',
            text: 'Deferred scrolling'
        }, {
            id: 7,
            status: 'inProgress',
            text: 'Virtual scrolling'
        }, {
            id: 8,
            status: 'inProgress',
            text: 'Infinite scrolling'
        }, {
            id: 9,
            status: 'toDo',
            text: 'Visible/hidden columns'
        }, {
            id: 10,
            status: 'toDo',
            text: 'Editing'
        }
    ];
    dataPhaseTwo = [
        {
            id: 11,
            status: 'toDo',
            text: 'Header'
        }, {
            id: 12,
            status: 'toDo',
            text: 'Public methods'
        }, {
            id: 13,
            status: 'toDo',
            text: 'Dragging with feedback'
        }, {
            id: 14,
            status: 'toDo',
            text: 'Vertical virtualization'
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