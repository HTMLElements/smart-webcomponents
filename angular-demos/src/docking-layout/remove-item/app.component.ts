import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { DockingLayoutComponent, DockingLayout } from 'smart-webcomponents-angular/dockinglayout';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('dockinglayout', { read: DockingLayoutComponent, static: false }) dockinglayout!: DockingLayoutComponent;
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;

    layout: Array<object> = [
        {
            type: 'LayoutGroup',
            orientation: 'horizontal',
            items: [
                {
                    id: 'tab0',
                    type: 'LayoutPanel',
                    label: 'Tabs 0',
                    size: '65%',
                    items: [{
                        label: 'Tab 0',
                        content: 'Content of Tab 0'
                    }]
                },
                {
                    id: 'tab1',
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
                    id: 'tab2',
                    type: 'LayoutPanel',
                    label: 'Tabs 2',
                    size: '25%',
                    items: [{
                        label: 'Tab 2',
                        content: 'Content of Tab 2'
                    }]
                },
                {
                    id: 'tab3',
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
            smartDockingLayout: DockingLayoutComponent = that.dockinglayout,
            dropDownList: DropDownListComponent = that.dropdownlist;
        let itemsCount: number = 0;

        that.button.addEventListener('click', function (): void {
            smartDockingLayout.removeAt(dropDownList.selectedValues[0]);
            dropDownList.removeAt(dropDownList.selectedIndexes[0]);
            itemsCount++;

            if (itemsCount === 3) {
                that.button.disabled = true;
                dropDownList.disabled = true;
                return;
            }
        });
    }
}