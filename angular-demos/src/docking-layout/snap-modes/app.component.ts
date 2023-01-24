import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DockingLayoutComponent } from 'smart-webcomponents-angular/dockinglayout';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('dockinglayout', { read: DockingLayoutComponent, static: false }) dockinglayout!: DockingLayoutComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;

    layout: Array<object> = [
        {
            id: 'item1',
            label: 'Tabs 1',
            items: [{
                label: 'Tab 1',
                content: 'Content of Tab 1',
                selected: true
            },
            {
                label: 'Tab 2',
                content: 'Content of Tab 2'
            }],
            dropPosition: ['top', 'bottom', 'left', 'layout-left', 'layout-top']
        },
        {
            id: 'item2',
            label: 'Tabs 2',
            items: [{
                label: 'Tab 3',
                content: 'Content of Tab 3'
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
            radioButtons = [that.radioButton, that.radioButton2];

        for (let i = 0; i < radioButtons.length; i++) {
            radioButtons[i].addEventListener('click', function (): void {
                that.dockinglayout.snapMode = this.innerHTML.toLowerCase();
            });
        }


    }
}