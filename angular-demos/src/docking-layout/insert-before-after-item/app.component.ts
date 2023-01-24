import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { DockingLayoutComponent, DockingLayout } from 'smart-webcomponents-angular/dockinglayout';
import { DropDownListComponent, DropDownList } from 'smart-webcomponents-angular/dropdownlist';
import { WindowComponent, Window } from 'smart-webcomponents-angular/window';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('dockinglayout', { read: DockingLayoutComponent, static: false }) dockinglayout!: DockingLayoutComponent;
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;

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
            smartDockingLayout: DockingLayoutComponent = that.dockinglayout as DockingLayoutComponent,
            dropDownList: DropDownListComponent = that.dropdownlist as DropDownListComponent,
            insertBeforeButton: ButtonComponent = that.button as ButtonComponent,
            insertAfterButton: ButtonComponent = that.button2 as ButtonComponent,
            tabsWindowObject = {
                label: 'New Item',
                size: '25%',
                items: [{
                    label: 'New Tab Item',
                    content: 'New Tab Item Content'
                }]
            },
            createListItem = function () {
                const item = document.createElement('smart-list-item');

                item.label = 'Tabs ' + dropDownList.items.length;
                dropDownList.appendChild(item);
            };

        smartDockingLayout.layout = [
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
            },
            {
                type: 'LayoutPanel',
                label: 'Tabs 2',
                items: [{
                    label: 'Tab 2',
                    content: 'Content of Tab 2'
                }]
            }
        ];

        let itemsCount = 0;

        insertAfterButton.addEventListener('click', function (): void {
            if (itemsCount === 1) {
                insertAfterButton.disabled = true;
                insertBeforeButton.disabled = true;
            }

            smartDockingLayout.insertAfterItem(dropDownList.selectedIndexes[0], tabsWindowObject);
            createListItem();
            itemsCount++;
        });

        insertBeforeButton.addEventListener('click', function (): void {
            if (itemsCount === 1) {
                insertAfterButton.disabled = true;
                insertBeforeButton.disabled = true;
            }

            smartDockingLayout.insertBeforeItem(dropDownList.selectedIndexes[0], tabsWindowObject);
            createListItem();
            itemsCount++;
        });

        smartDockingLayout.addEventListener('stateChange', function (): void {
            let layoutItems: Array<WindowComponent> = smartDockingLayout.items, i: number;
            let undockedItems: Array<WindowComponent> = smartDockingLayout.undockedItems;

            for (i = 0; i < layoutItems.length; i++) {
                layoutItems[i].label = 'Tabs ' + i;
                layoutItems[i].update(0, 'Tab ' + i, 'Content of Tab ' + i);
            }

            for (i = 0; i < undockedItems.length; i++) {
                undockedItems[i].label = 'Undocked Tabs';
                undockedItems[i].update(0, 'Tab', 'Content of Undocked Tab');
            }
        });
    }
}