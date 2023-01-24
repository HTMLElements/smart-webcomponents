import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { DockingLayoutComponent } from 'smart-webcomponents-angular/dockinglayout';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
    @ViewChild('dockinglayout', { read: DockingLayoutComponent, static: false }) dockinglayout!: DockingLayoutComponent;

    layout: Array<object> = [
        {
            type: 'LayoutGroup',
            size: '50%',
            orientation: 'horizontal',
            items: [
                {
                    type: 'LayoutPanel',
                    label: 'Tabs 0',
                    size: '50%',
                    items: [{
                        label: 'Tab 0',
                        content: 'Content of Tab 0'
                    }]
                },
                {
                    type: 'LayoutPanel',
                    label: 'Tabs 1',
                    items: [{
                        label: 'Tab 1',
                        content: 'Content of Tab 1'
                    }]
                }
            ]
        },
        {
            type: 'LayoutGroup',
            orientation: 'horizontal',
            items: [
                {
                    type: 'LayoutPanel',
                    label: 'Tabs 2',
                    size: '25%',
                    items: [{
                        label: 'Tab 2',
                        content: 'Content of Tab 2'
                    }]
                },
                {
                    type: 'LayoutPanel',
                    label: 'Tabs 3',
                    items: [{
                        label: 'Tab 3',
                        content: 'Content of Tab 3',
                    }]
                }
            ]
        }
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

        const that = this,
            smartDockingLayout = that.dockinglayout,
            buttonInsertOutsideTargetGroupLeft = that.button,
            buttonInsertOutsideTargetGroupRight = that.button2,
            buttonInsertOutsideTargetGroupTop = that.button3,
            buttonInsertOutsideTargetGroupBottom = that.button4,
            createTabsWindowObject = function (): object {
                return {
                    label: 'New Item',
                    items: [{
                        label: 'New Tab Item',
                        content: 'New Tab Item Content'
                    }]
                };
            };
        let insertCount = 0;
        const validate = function (): boolean {
            insertCount++;

            if (insertCount === 2) {
                buttonInsertOutsideTargetGroupLeft.disabled = true;
                buttonInsertOutsideTargetGroupRight.disabled = true;
                buttonInsertOutsideTargetGroupTop.disabled = true;
                buttonInsertOutsideTargetGroupBottom.disabled = true;
                return true;
            }

            if (insertCount > 2) {
                return false;
            }

            return true;
        };

        buttonInsertOutsideTargetGroupLeft.addEventListener('click', function (): void {
            const result: boolean = validate();

            if (!result) {
                return;
            }

            smartDockingLayout.insertOutsideTargetGroupLeft(0, createTabsWindowObject());
        });

        buttonInsertOutsideTargetGroupRight.addEventListener('click', function (): void {
            const result: boolean = validate();

            if (!result) {
                return;
            }

            smartDockingLayout.insertOutsideTargetGroupRight(0, createTabsWindowObject());
        });

        buttonInsertOutsideTargetGroupTop.addEventListener('click', function (): void {
            const result: boolean = validate();

            if (!result) {
                return;
            }

            smartDockingLayout.insertOutsideTargetGroupTop(0, createTabsWindowObject());
        });

        buttonInsertOutsideTargetGroupBottom.addEventListener('click', function (): void {
            const result: boolean = validate();

            if (!result) {
                return;
            }

            smartDockingLayout.insertOutsideTargetGroupBottom(0, createTabsWindowObject());
        });


    }
}