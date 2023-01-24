import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { DockingLayoutComponent } from 'smart-webcomponents-angular/dockinglayout';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
    @ViewChild('dockinglayout', { read: DockingLayoutComponent, static: false }) dockinglayout: DockingLayoutComponent;

    layout: Array<object> = [
        {
            id: 'tab1',
            type: 'LayoutPanel',
            label: 'Tabs 1',
            items: [{
                label: 'Tab 1',
                content: 'Content of Tab 1',
                selected: true
            }]
        },
        {
            id: 'tab2',
            type: 'LayoutPanel',
            label: 'Tabs 2',
            items: [{
                label: 'Tab 2',
                content: 'Content of Tab 2',
            }]
        },
        {
            id: 'tab3',
            type: 'LayoutPanel',
            label: 'Tabs 3',
            items: [{
                label: 'Tab 3',
                content: 'Content of Tab 3'
            }]
        }
    ];

    update(event: CustomEvent): void {
        const that = this,
            smartDockingLayout: DockingLayoutComponent = that.dockinglayout,
            dropDownList: DropDownListComponent = that.dropDownList,
            targetItem: HTMLElement = smartDockingLayout.nativeElement.querySelector('#' + dropDownList.selectedValues[0]) as HTMLElement;

        smartDockingLayout.update(targetItem, {
            size: '33%',
            label: 'Updated',
            items: [{
                index: 0, label: 'Updated',
                content: 'Updated'
            }]
        });
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