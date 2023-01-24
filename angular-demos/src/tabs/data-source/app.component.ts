import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { TabsComponent } from 'smart-webcomponents-angular/tabs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;

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

        that.tabs.dataSource = [
            {
                label: 'Group 1',
                items: [
                    {
                        label: 'Item 1.1',
                        content: 'Content 1.1'
                    },
                    {
                        label: 'Item 1.2',
                        content: 'Content 1.2'
                    },
                    {
                        label: 'Item 1.3',
                        content: 'Content 1.3'
                    }
                ]
            },
            {
                label: 'Item 2',
                content: 'Content 2'
            },
            {
                label: 'Item 3',
                content: 'Content 3',
                selected: true
            }
        ];
        that.button.addEventListener('click', function () {
            that.tabs.dataSource = [
                {
                    label: 'Item A',
                    content: 'Content A',
                    index: 3
                },
                {
                    label: 'Item B',
                    content: 'Content B',
                    index: 2
                },
                {
                    label: 'Item C',
                    content: 'Content C',
                    index: 1
                },
                {
                    label: 'Item D',
                    labelSize: 80,
                    content: 'Content D',
                    index: 0
                }
            ];
        });
    }
}