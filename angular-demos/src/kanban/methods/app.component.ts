import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { KanbanComponent } from 'smart-webcomponents-angular/kanban';
import { GetKanbanData } from '../../common/data';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { NumericTextBoxComponent } from 'smart-webcomponents-angular/numerictextbox';
import { ButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('kanban', { read: KanbanComponent, static: false }) kanban!: KanbanComponent;
    @ViewChild('input', { read: InputComponent, static: false }) input!: InputComponent;
    @ViewChild('numerictextbox', { read: NumericTextBoxComponent, static: false }) numerictextbox!: NumericTextBoxComponent;
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
    @ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
    @ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
    @ViewChild('button7', { read: ButtonComponent, static: false }) button7!: ButtonComponent;
    @ViewChild('button8', { read: ButtonComponent, static: false }) button8!: ButtonComponent;
    @ViewChild('button9', { read: ButtonComponent, static: false }) button9!: ButtonComponent;
    @ViewChild('button10', { read: ButtonComponent, static: false }) button10!: ButtonComponent;
    @ViewChild('button11', { read: ButtonComponent, static: false }) button11!: ButtonComponent;
    @ViewChild('button12', { read: ButtonComponent, static: false }) button12!: ButtonComponent;

    collapsible = true;
    dataSource = GetKanbanData();
    editable = true;
    textTemplate = function (settings: { data: any, task: HTMLDivElement, text: string, template!: string }) {
        settings.template = `<span class="smart-badge smart-badge-dark">${settings.data.id}</span>${settings.text}`;
    };
    columns = [
        { label: 'To do', dataField: 'toDo' },
        { label: 'In progress', dataField: 'inProgress' },
        { label: 'Testing', dataField: 'testing' },
        { label: 'Done', dataField: 'done' }
    ];

    counter = 1;

    collapseOnClick() {
        this.kanban.collapse(this.input.value);
    }

    expandOnClick() {
        this.kanban.expand(this.input.value);
    }

    expandAllOnClick() {
        this.kanban.expandAll();
    }

    beginEditOnClick() {
        this.kanban.beginEdit(parseFloat(this.numerictextbox.value));
    }

    endEditOnClick() {
        this.kanban.endEdit();
    }

    cancelEditOnClick() {
        this.kanban.cancelEdit();
    }

    addTaskOnClick() {
        const that = this;

        that.kanban.addTask({ id: 15 + that.counter, text: 'New task ' + that.counter, status: that.input.value });
        that.counter++;
    }

    copyTaskOnClick() {
        this.kanban.copyTask(parseFloat(this.numerictextbox.value));
    }

    moveTaskOnClick() {
        const that = this;

        that.kanban.moveTask(parseFloat(that.numerictextbox.value), that.input.value);
    }

    removeTaskOnClick() {
        this.kanban.removeTask(parseFloat(this.numerictextbox.value));
    }

    updateTaskOnClick() {
        this.kanban.updateTask(parseFloat(this.numerictextbox.value), { text: 'Updated task at ' + new Date().toLocaleTimeString() });
    }

    ensureVisibleOnClick() {
        this.kanban.ensureVisible(parseFloat(this.numerictextbox.value));
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