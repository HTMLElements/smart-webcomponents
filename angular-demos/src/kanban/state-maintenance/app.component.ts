import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { KanbanComponent } from 'smart-webcomponents-angular/kanban';
import { GetKanbanData } from '../../common/data';
import { ButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('kanban', { read: KanbanComponent, static: false }) kanban!: KanbanComponent;
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;

    autoLoadState = true;
    collapsible = true;
    dataSource = GetKanbanData();
    editable = true;
    headerPosition = 'top';
    selectionMode = 'zeroOrManyExtended';
    columns = [
        { label: 'To do', dataField: 'toDo' },
        { label: 'In progress', dataField: 'inProgress' },
        { label: 'Testing', dataField: 'testing' },
        { label: 'Done', dataField: 'done' }
    ];

    saveStateOnClick() {
        this.kanban.saveState();
        this.button2.disabled = false;
    }

    loadStateOnClick() {
        this.kanban.loadState();
    }

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