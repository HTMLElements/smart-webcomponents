import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SwitchButtonComponent } from 'smart-webcomponents-angular/switchbutton';
import { EditorComponent, EditMode } from 'smart-webcomponents-angular/editor';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('switchbutton', { read: SwitchButtonComponent, static: false }) switchbutton!: SwitchButtonComponent;
    @ViewChild('editor', { read: EditorComponent, static: false }) editor!: EditorComponent;

    editMode: EditMode = 'markdown';

    toolbarItems: any = [
        'bold', 'italic', 'Underline', 'StrikeThrough', 'hyperlink', 'removeLink', 'copy', 'cut', 'paste', 'alignment', 'table', 'image', 'sourcecode',
        {
            name: 'formats',
            dataSource: [
                {
                    label: 'Header 1',
                    value: '#'
                },
                {
                    label: 'Header 2',
                    value: '##'
                },
                {
                    label: 'Header 3',
                    value: '###'
                },
                {
                    label: 'Header 4',
                    value: '####'
                },
                {
                    label: 'Header 5',
                    value: '#####'
                },
                {
                    label: 'Header 6',
                    value: '######'
                },
                {
                    label: 'Code Block',
                    value: '``````'
                }
            ]
        }, 'splitmode'
    ];

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

Supported Browsers: Chrome, Firefox, Safari, Edge, Opera

| Header 1 | Header 2 | Header 3 |
|--------- |--------- |--------- |
| Column A 1 | Column A 2 | Column A 3 |
| Column A 1 | Column A 2 | Column A 3 |
| Column B 1 | Column B 2 | Column B 3 |
`;

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
    }

    handleChange(event: CustomEvent) {
        this.editor.previewMode(event.detail.value);
    }
}