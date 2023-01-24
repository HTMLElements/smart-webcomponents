import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { KanbanComponent } from 'smart-webcomponents-angular/kanban';
import { GetKanbanData } from '../../common/data';
import { MenuComponent, MenuItemComponent } from 'smart-webcomponents-angular/menu';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('kanban', { read: KanbanComponent, static: false }) kanban!: KanbanComponent;
    @ViewChild('menu', { read: MenuComponent, static: false }) menu2: MenuComponent;
    @ViewChild('done', { read: MenuItemComponent, static: false }) done: MenuItemComponent;
    @ViewChild('removeAll', { read: MenuItemComponent, static: false }) removeAll: MenuItemComponent;

    collapsible = true;
    dataSource = GetKanbanData();
    editable = true;
    columns = [
        { label: 'To do', dataField: 'toDo' },
        { label: 'In progress', dataField: 'inProgress' },
        { label: 'Testing', dataField: 'testing' },
        { label: 'Done', dataField: 'done' }
    ];

    processedTaskData: any;
    columnElement: any;

    handleContextmenu(event: Event) {
        // disable the Kanban's default context menu
        event.preventDefault();
        return false;
    }

    handleMouseup(event: MouseEvent) {
        const menu = this.menu;

        if (event.button !== 2) {
            menu.close();
            return;
        }

        const target = event.target as HTMLElement,
            taskElement = target.closest('.smart-kanban-task') as any;

        if (taskElement) {
            this.processedTaskData = taskElement.data;
            this.done.disabled = this.processedTaskData.status === 'done';
            menu.nativeElement.classList.add('task');
            menu.nativeElement.classList.remove('column');
            menu.open(event.pageX + 5, event.pageY + 5);
            return;
        }

        this.columnElement = target.closest('.smart-kanban-column');

        if (this.columnElement) {
            this.removeAll.disabled = this.columnElement.querySelectorAll('.smart-kanban-task').length === 0;
            menu.nativeElement.classList.add('column');
            menu.nativeElement.classList.remove('task');
            menu.open(event.pageX + 5, event.pageY + 5);
            return;
        }

        menu.close();
    }

    handleItemClick(event: any) {
        const kanban = this.kanban,
            processedTaskData = this.processedTaskData;

        switch (event.detail.label) {
            case 'Edit':
                kanban.beginEdit(processedTaskData.id);
                break;
            case 'Copy':
                kanban.copyTask(processedTaskData.id);
                break;
            case 'Mark as "Done"':
                kanban.moveTask(processedTaskData.id, 'done');
                break;
            case 'Remove all tasks': {
                const allTaskElementsInColumn: HTMLElement[] = Array.from(this.columnElement.querySelectorAll('.smart-kanban-task'));

                allTaskElementsInColumn.forEach((taskElement: HTMLElement) => kanban.removeTask(taskElement));
                break;
            }
        }
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
        this.kanban.addEventListener('contextmenu', this.handleContextmenu);
        this.kanban.addEventListener('mouseup', this.handleMouseup.bind(this));
        this.menu.addEventListener('itemClick', this.handleItemClick.bind(this));
    }
}