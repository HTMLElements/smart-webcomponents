import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { DockingLayoutComponent, DockingLayout } from 'smart-webcomponents-angular/dockinglayout';
import { DropDownListComponent, DropDownList } from 'smart-webcomponents-angular/dropdownlist';
import { WindowComponent, Window } from 'smart-webcomponents-angular/window';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('buttonInsertIntoLeft', { read: ButtonComponent, static: false }) buttonInsertIntoLeft!: ButtonComponent;
    @ViewChild('buttonInsertIntoRight', { read: ButtonComponent, static: false }) buttonInsertIntoRight!: ButtonComponent;
    @ViewChild('buttonInsertIntoTop', { read: ButtonComponent, static: false }) buttonInsertIntoTop!: ButtonComponent;
    @ViewChild('buttonInsertIntoBottom', { read: ButtonComponent, static: false }) buttonInsertIntoBottom!: ButtonComponent;
    @ViewChild('dockingLayout', { read: DockingLayoutComponent, static: false }) dockingLayout!: DockingLayoutComponent;
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;

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
            smartDockingLayout: DockingLayoutComponent = that.dockingLayout as DockingLayoutComponent,
            dropDownList: DropDownListComponent = that.dropdownlist as DropDownListComponent,
            buttonInsertIntoLeft: ButtonComponent = that.buttonInsertIntoLeft as ButtonComponent,
            buttonInsertIntoRight: ButtonComponent = that.buttonInsertIntoRight as ButtonComponent,
            buttonInsertIntoTop: ButtonComponent = that.buttonInsertIntoTop as ButtonComponent,
            buttonInsertIntoBottom: ButtonComponent = that.buttonInsertIntoBottom as ButtonComponent,
            tabsWindowObject = {
                label: 'New Item',
                size: '50%',
                items: [{
                    label: 'New Tab Item',
                    content: 'New Tab Item Content'
                }]
            }, createListItem = function () {
                const item = document.createElement('smart-list-item');

                item.label = 'Tabs ' + dropDownList.items.length;
                dropDownList.appendChild(item);
            };

        buttonInsertIntoLeft.addEventListener('click', function (): void {
            const index: number = dropDownList.selectedIndexes[0];

            smartDockingLayout.insertIntoLeft(index, tabsWindowObject);
            createListItem();
        });

        buttonInsertIntoRight.addEventListener('click', function (): void {
            const index: number = dropDownList.selectedIndexes[0];

            smartDockingLayout.insertIntoRight(index, tabsWindowObject);
            createListItem();
        });

        buttonInsertIntoTop.addEventListener('click', function (): void {
            const index: number = dropDownList.selectedIndexes[0];

            smartDockingLayout.insertIntoTop(index, tabsWindowObject);
            createListItem();
        });

        buttonInsertIntoBottom.addEventListener('click', function (): void {
            const index: number = dropDownList.selectedIndexes[0];

            smartDockingLayout.insertIntoBottom(index, tabsWindowObject);
            createListItem();
        });

        smartDockingLayout.addEventListener('stateChange', function () {
            const layoutItems: Array<WindowComponent> = that.dockingLayout.items,
                undockedItems: Array<WindowComponent> = that.dockingLayout.undockedItems;

            for (let i = 0; i < layoutItems.length; i++) {
                layoutItems[i].label = 'Tabs ' + i;
                layoutItems[i].update(0, 'Tab ' + i, 'Content of Tab ' + i);
            }
            for (let i = 0; i < undockedItems.length; i++) {
                undockedItems[i].label = 'Undocked Tabs';
                undockedItems[i].update(0, 'Tab', 'Content of Undocked Tab');
            }
        });
    }
}