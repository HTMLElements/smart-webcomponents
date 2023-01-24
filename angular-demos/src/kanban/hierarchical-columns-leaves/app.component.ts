import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { KanbanComponent } from 'smart-webcomponents-angular/kanban';
import { GetKanbanHierarchicalData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('kanban', { read: KanbanComponent, static: false }) kanban!: KanbanComponent;

    collapsible = true;
    dataSource = GetKanbanHierarchicalData();
    taskPosition = 'leaf';
    columns = [
        { label: 'To do', dataField: 'toDo' },
        { label: 'In progress', dataField: 'inProgress' },
        {
            label: 'Testing', dataField: 'testing', orientation: 'horizontal', columns: [
                {
                    label: 'Manual testing',
                    dataField: 'manualTesting',
                    columns: [
                        { label: 'Desktop devices', dataField: 'desktop' },
                        { label: 'Mobile devices', dataField: 'mobile' }
                    ]
                },
                { label: 'Unit testing', dataField: 'unitTesting' }
            ]
        },
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
        const that = this;

        that.dataSource[3].status = 'desktop';
        that.dataSource[12].status = 'mobile';
        that.dataSource[13].status = 'unitTesting';
        that.dataSource[14].status = 'desktop';
    }
}