import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { DockingLayoutComponent } from 'smart-webcomponents-angular/dockinglayout';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('dockinglayout', { read: DockingLayoutComponent, static: false }) dockinglayout!: DockingLayoutComponent;

    layout: Array<object> = [
        {
            type: 'LayoutGroup',
            orientation: 'horizontal',
            items: [
                {
                    type: 'LayoutPanel',
                    label: 'חלון א',
                    items: [{
                        id: 'Itme',
                        label: '#Itme',
                        content: 'תוכן הפריט עם המזהה "Itme"',
                        selected: true
                    }]
                },
                {
                    type: 'LayoutGroup',
                    id: 'verticalGroup',
                    orientation: 'vertical',
                    items: [
                        {
                            type: 'LayoutPanel',
                            label: 'חלון ב',
                            size: '50%',
                            items: [{
                                id: 'פריט ב',
                                label: '#פריט ב',
                                content: 'תוכן הפריט עם המזהה "פריט ב"',
                            }]
                        },
                        {
                            type: 'LayoutPanel',
                            label: 'חלון ג',
                            items: [{
                                id: 'פריט ג',
                                label: '#פריט ג',
                                content: 'תוכן הפריט עם המזהה "פריט ג"'
                            }]
                        },
                    ]
                },
                {
                    type: 'LayoutPanel',
                    label: 'חלון ד',
                    items: [{
                        id: 'פריטים',
                        label: '#פריטים',
                        content: 'תוכן הפריט עם המזהה "פריטים"',
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

    }
}