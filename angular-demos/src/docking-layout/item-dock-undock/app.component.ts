import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { DockingLayoutComponent } from 'smart-webcomponents-angular/dockinglayout';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('dockinglayout', { read: DockingLayoutComponent, static: false }) dockinglayout!: DockingLayoutComponent;
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;

    layout: Array<object> = [
        {
            type: 'LayoutPanel',
            items: [{
                id: 'A',
                label: 'A',
                content: 'Content of item with id #itemA',
                selected: true
            }],
            autoHide: true,
            autoHidePosition: 'top'
        },
        {
            type: 'LayoutPanel',
            items: [{
                id: 'B',
                label: 'B',
                content: 'Content of item with id #itemB',
            }],
            autoHide: true,
            autoHidePosition: 'left'
        },
        {
            type: 'LayoutPanel',
            items: [{
                id: 'C',
                label: 'C',
                content: 'Content of item with id #itemC'
            }],
            autoHide: true,
            autoHidePosition: 'right'
        },
        {
            type: 'LayoutPanel',
            items: [{
                id: 'D',
                label: 'D',
                content: 'Content of item with id #itemD',
            }],
            autoHide: true,
            autoHidePosition: 'bottom'
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
            dropDownList = that.dropdownlist;

        that.button.addEventListener('click', function (): void {
            smartDockingLayout.dock(dropDownList.selectedValues[0]);
        });

        that.button2.addEventListener('click', function (): void {
            smartDockingLayout.undock(dropDownList.selectedValues[0]);
        });
    }
}