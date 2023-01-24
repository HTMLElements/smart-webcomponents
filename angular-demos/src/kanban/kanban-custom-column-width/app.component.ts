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
    columns = [
	    { color: '#33B679', label: 'To do', width: 300, dataField: 'toDo', allowHide: false },
		{ color: '#8E24AA', label: 'In progress', width: 400, dataField: 'inProgress' },
		{ color: '#039BE5', label: 'Testing', width: 300, dataField: 'testing' },
		{ color: '#DD5347', label: 'Done', width: 200, dataField: 'done', addNewButton: false }
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