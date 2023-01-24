import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { EditMode, EditorComponent, ToolbarItem } from 'smart-webcomponents-angular/editor';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('editor', { read: EditorComponent, static: false }) editor!: EditorComponent;

    editMode: EditMode = 'markdown';

    toolbarItems: string[] = ['Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
        'Formats', 'OrderedList', 'UnorderedList', '|',
        'hyperlink', 'Image', '|', 'Print',
        'sourcecode', 'FullScreen', '|', 'Undo', 'Redo'];

    value: string = `
# Smart UI
Web Components, Anguiar UI Components and React UI Components  for Professional Web Applications

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/collection/HTMLElements/smarthtmlelements-core)


Build responsive, mobile-first projects on the Web with the most advanced front-end component library
-----------------------------------------------------------------------------------------------------

What is Smart UI?
----------------------------

Smart UI is a Framework for building  Web Components and Custom Elements. Smart is similar to Stencil and LitElement. It supports two-way data-binding, templates, property change notifications, Typescript-like type-checking and validation.
Smart does not have third-party dependencies. It is pure Javascript code. 
60+ UI Components are built with Smart including Grid, Chart, Kanban, Gantt, Table, Tabs, Accordion, Gauge, DateTimePicker and others. Some of the UI Components built with the library are commercial. Others are open-source.
Smart UI components are available in Javascript, Angular and React. Typescript definitions are included.

Works across devices and browsers
---------------------------------

Supported Browsers: Chrome, Firefox, Safari, Edge, Opera`;

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
    }

    handleExport(type: string) {
        this.editor.exportData(type);
    }

    handlePrint() {
        this.editor.print();
    }
}