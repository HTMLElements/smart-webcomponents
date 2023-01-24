import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { KanbanComponent } from 'smart-webcomponents-angular/kanban';
import { GetKanbanData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('kanban', { read: KanbanComponent, static: false }) kanban!: KanbanComponent;

    collapsible = true;
    dataSource = GetKanbanData();
    headerPosition = 'top';
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