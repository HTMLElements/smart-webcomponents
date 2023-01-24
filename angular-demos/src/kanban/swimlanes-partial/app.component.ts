import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { KanbanComponent } from 'smart-webcomponents-angular/kanban';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('kanban', { read: KanbanComponent, static: false }) kanban!: KanbanComponent;

    collapsible = true;
    dataSource = [
        {
            text: 'Research of energy business',
            userId: 3,
            status: 'done'
        },
        {
            text: 'Create Gannt chart',
            userId: 2,
            status: 'inProgress',
            swimlane: 'client1'
        },
        {
            text: 'Develop prototype',
            userId: 4,
            status: 'testing',
            swimlane: 'client1'
        },
        {
            text: 'Data extrapolation',
            userId: 3,
            status: 'inProgress',
            swimlane: 'client1'
        },
        {
            text: 'Prepare requirements',
            userId: 1,
            status: 'done'
        },
        {
            text: 'Try out new simulation',
            userId: 1,
            status: 'testing',
            swimlane: 'client2'
        },
        {
            text: 'Create blueprints for new product',
            userId: 1,
            status: 'toDo',
            swimlane: 'client2'
        },
        {
            text: 'Calculate hours necessary for "EMV" project',
            userId: 2,
            status: 'toDo',
            swimlane: 'other'
        },
        {
            text: 'Distribute final product',
            userId: 4,
            status: 'done'
        }
    ];
    editable = true;
    swimlanes = [
        { label: 'Client "Energo"', dataField: 'client1' },
        { label: 'Client "Sim-Prod Ltd."', dataField: 'client2', color: '#C90086' },
        { label: 'Other clients', dataField: 'other', color: '#03C7C0' }
    ];
    swimlanesFrom = 0;
    swimlanesTo = 2;
    userList = true;
    users = [
        { id: 0, name: 'Andrew', image: './../../../src/images/people/andrew.png' },
        { id: 1, name: 'Anne', image: './../../../src/images/people/anne.png' },
        { id: 2, name: 'Janet', image: './../../../src/images/people/janet.png' },
        { id: 3, name: 'John', image: './../../../src/images/people/john.png' },
        { id: 4, name: 'Laura', image: './../../../src/images/people/laura.png' }
    ];
    columns = [
        { label: 'To do', dataField: 'toDo' },
        { label: 'In progress', dataField: 'inProgress' },
        { label: 'Testing', dataField: 'testing' },
        { label: 'Done', dataField: 'done' }
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