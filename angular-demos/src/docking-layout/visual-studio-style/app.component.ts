import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { DockingLayoutComponent } from 'smart-webcomponents-angular/dockinglayout';
import { TreeComponent } from 'smart-webcomponents-angular/tree';
import { MultilineTextBoxComponent } from 'smart-webcomponents-angular/multilinetextbox';
import { TextBoxComponent } from 'smart-webcomponents-angular/textbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('dockingLayout', { read: DockingLayoutComponent }) dockingLayout!: DockingLayoutComponent;
    @ViewChild('tree', { read: TreeComponent }) tree!: TreeComponent;
    @ViewChild('multilineTextBox', { read: MultilineTextBoxComponent }) multilineTextBox!: MultilineTextBoxComponent;
    @ViewChild('multilineTextBox2', { read: MultilineTextBoxComponent }) multilineTextBox2!: MultilineTextBoxComponent;
    @ViewChild('multilineTextBox3', { read: MultilineTextBoxComponent }) multilineTextBox3!: MultilineTextBoxComponent;
    @ViewChild('textBox', { read: TextBoxComponent }) textBox!: TextBoxComponent;


    multilineTextBoxValue: string = `
    window.onload = function() {
        const button = document.querySelector('smart-button');

        buttons.addEventListener('click', function() {
            alert('Hello World!');
        });
    }
    `;

    multilineText2BoxValue: string = `	
    smart-button {
    }`;

    multilineText3BoxValue: string = `<smart-button>Click Me</smart-button> `;

    layout: Array<object> = [
        {
            id: 'item0',
            label: 'View',
            items: [{
                label: 'Team Explorer',
                selected: true,
                content: 'This is the first item of the Tabs 0.'
            },
            {
                label: 'Server Explorer'
            }],
            autoHide: true,
            autoHidePosition: 'left'
        },
        {
            type: 'LayoutGroup',
            items: [
                {
                    type: 'LayoutPanel',
                    id: 'tabPanel',
                    label: 'Tabs 1',
                    items: [{
                        label: 'helloWorld.js',
                        selected: true,
                    },
                    {
                        label: 'helloWorld.css'
                    },
                    {
                        label: 'helloWorld.html'
                    }],
                    headerPosition: 'none',
                    tabCloseButtons: true,
                    size: '75%'
                },
                {
                    type: 'LayoutPanel',
                    label: 'Output',
                    items: [
                        {
                            label: 'Output',
                            headerPosition: 'none',
                            content: 'All files are up to date.'
                        }
                    ],
                    headerPosition: 'none'
                }
            ],
            orientation: 'horizontal'
        },
        {
            id: 'item2',
            label: 'Solution Explorer',
            items: [
                {
                    content: ''
                }
            ],
            tabPosition: 'hidden'
        },
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

        that.dockingLayout.update('item0',
            {
                items: [{
                    index: 1,
                    content: that.textBox.nativeElement
                }]
            });

        that.dockingLayout.update('tabPanel',
            {
                items: [{
                    index: 0,
                    content: that.multilineTextBox.nativeElement
                },
                {
                    index: 1,
                    content: that.multilineTextBox2.nativeElement
                },
                {
                    index: 2,
                    content: that.multilineTextBox3.nativeElement
                }],
            });

        that.dockingLayout.update('item2',
            {
                items: [{
                    index: 0,
                    content: that.tree.nativeElement
                }]
            });
    }
}