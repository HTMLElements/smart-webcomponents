import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { EditorComponent, ToolbarItem } from 'smart-webcomponents-angular/editor';
import { ButtonGroup } from 'smart-webcomponents-angular/buttongroup';

interface CustomElement extends HTMLElement {
    customElement: any
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('editor', { read: EditorComponent, static: false }) editor!: EditorComponent;

    //Properties
    // toolbarItems: string[] | ToolbarItem[] = ['fontColor', 'BackgroundColor', 'FontSize',
    toolbarItems = ['fontColor', 'BackgroundColor', 'FontSize',
        {
            name: 'image',
            inlineToolbarItems: [{
                name: 'customButton',
                width: 100,
                template: '<smart-button>Button</smart-button>'
            }, 'delete'],
            //Window Editor settings
            editor: {
                url: 'http://www.',
                height: 200,
                width: '100%'
            }
        }, {
            name: 'table',
            inlineToolbarItems: ['BackgroundColor', 'FontSize', {
                name: 'customButtonGrpup',
                width: 200,
                template: (element: CustomElement, item: ToolbarItem) => {
                    if (!element.customElement) {
                        const buttonGroup = document.createElement('smart-button-group') as ButtonGroup;
                        buttonGroup.dataSource = ['A', 'B', 'C'];
                        //Cache it on the ToolbarItem to avoid re-creation of the element
                        element.customElement = buttonGroup;
                        //Add an event listener if needed
                    }
                    if (!element.contains(element.customElement)) {
                        element.appendChild(element.customElement);
                    }
                }
            }],
            //Window Editor settings
            editor: {
                cols: 3,
                rows: 5,
                tableheader: true
            }
        },
        {
            name: 'hyperlink',
            inlineToolbarItems: [{
                width: 200,
                template: '<smart-button>Action Button</smart-button>'
            }, {
                name: 'customInput',
                width: 100,
                template: (element: CustomElement, item: ToolbarItem) => {
                    if (!element.customElement) {
                        const input = document.createElement('smart-input');
                        input.dataSource = ['Option 1', 'Option 2', 'Option 3'];
                        input.dropDownButtonPosition = 'right';
                        input.readonly = true;
                        element.customElement = input;
                        //Add an event listener if needed
                    }
                    if (!element.contains(element.customElement)) {
                        element.appendChild(element.customElement);
                    }
                }
            }, {
                name: 'customCheckBox',
                width: 200,
                template: '<smart-check-box>CheckBox Item</smart-check-box>'
            }],
            //Window Editor settings
            editor: {
                address: 'http://www.',
                target: 'ala'
            }
        }, 'removeLink', 'alignment', 'fontname', 'formats', 'splitmode'];

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
    }
}