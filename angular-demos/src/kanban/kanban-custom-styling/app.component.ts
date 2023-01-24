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
    editable = true;
    columnActions = true;
    columnEditMode = 'menu';
    columnFooter = true;
    columnSummary = true;
    columnColors = true;
    columnColorEntireSurface = true;
    dataSource = GetKanbanData();
    allowColumnEdit = true;
    allowColumnReorder = true;
    taskActions = true;
    taskDue = true;
    taskSubtasks = true;
    taskComments = true;
    currentUser = 0;
    taskProgress = true;
    users = [
        { id: 0, name: 'Andrew', image: '../../images/people/andrew.png' },
        { id: 1, name: 'Anne', image: '../../images/people/anne.png' },
        { id: 2, name: 'Janet', image: '../../images/people/janet.png' },
        { id: 3, name: 'John', image: '../../images/people/john.png' },
        { id: 4, name: 'Laura', image: '../../images/people/laura.png' }
    ];
    columns = [
        { color: '#33B679', label: 'To do', dataField: 'toDo', allowHide: false },
        { color: '#8E24AA', label: 'In progress', dataField: 'inProgress' },
        { color: '#039BE5', label: 'Testing', dataField: 'testing' },
        { color: '#DD5347', label: 'Done', dataField: 'done', addNewButton: false }
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