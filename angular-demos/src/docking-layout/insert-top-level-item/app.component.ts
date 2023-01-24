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
            type: 'LayoutPanel',
            label: 'Tabs 0',
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
                content: 'Content of Tab 1',
            }]
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
            tabsWindowObject = {
                label: 'New Item',
                items: [{
                    label: 'New Tab Item',
                    content: 'New Tab Item Content'
                }]
            };
        let insertCount = 0;
        const validate = function (): boolean {
            insertCount++;

            if (insertCount === 2) {
                that.button.disabled = true;
                that.button2.disabled = true;
                that.button3.disabled = true;
                that.button4.disabled = true;
                return true;
            }

            if (insertCount > 2) {
                return false;
            }

            return true;
        };
        that.button.addEventListener('click', function (): void {
            const result: boolean = validate();

            if (!result) {
                return;
            }

            smartDockingLayout.insertLayoutLeft(tabsWindowObject);
        });

        that.button2.addEventListener('click', function (): void {
            const result: boolean = validate();

            if (!result) {
                return;
            }

            smartDockingLayout.insertLayoutRight(tabsWindowObject);
        });

        that.button3.addEventListener('click', function (): void {
            const result: boolean = validate();

            if (!result) {
                return;
            }

            smartDockingLayout.insertLayoutTop(tabsWindowObject);
        });

        that.button4.addEventListener('click', function (): void {
            const result: boolean = validate();

            if (!result) {
                return;
            }

            smartDockingLayout.insertLayoutBottom(tabsWindowObject);
        });


    }
}