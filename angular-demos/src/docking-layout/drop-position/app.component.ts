import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DockingLayoutComponent } from 'smart-webcomponents-angular/dockinglayout';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('dockinglayout', { read: DockingLayoutComponent, static: false }) dockinglayout!: DockingLayoutComponent;

    layout: Array<object> = [
        {
            type: "LayoutGroup",
            orientation: "horizontal",
            items: [
                {
                    type: "LayoutGroup",
                    items: [
                        {
                            type: "LayoutPanel",
                            id: "item1",
                            label: "Tabs 1",
                            tabPosition: "top",
                            dropPosition: ["top", "bottom", "header", "layout-top", "layout-left", "layout-right", "layout-bottom"],
                            items: [
                                {
                                    type: "LayoutPanelItem",
                                    label: "Tab 1",
                                    selected: true,
                                    content: "Item dropping is allowed only on the top, bottom and header positions."
                                }
                            ],
                            min: 200,
                            size: 627
                        },
                        {
                            type: "LayoutPanel",
                            id: "item2",
                            label: "Tab 2",
                            tabPosition: "top",
                            items: [
                                {
                                    type: "LayoutPanelItem",
                                    label: "Tab 2",
                                    selected: true,
                                    content: "Dragging of this Item is disabled.",
                                    draggable: false
                                }
                            ],
                            size: 952
                        },
                        {
                            type: "LayoutPanel",
                            id: "item3",
                            label: "Tabs 3",
                            tabPosition: "top",
                            dropPosition: ["top", "bottom", "header", "left", "right", "center"],
                            items: [
                                {
                                    type: "LayoutPanelItem",
                                    label: "Tab 3",
                                    selected: true,
                                    content: "Content of Tab 3"
                                }
                            ],
                            min: 200,
                            size: 305
                        }
                    ],
                    orientation: "vertical",
                    size: 395
                },
                {
                    type: "LayoutPanel",
                    label: "Tab 4",
                    tabPosition: "top",
                    dropPosition: ["none"],
                    items: [
                        {
                            type: "LayoutPanelItem",
                            label: "Tab 4",
                            selected: true,
                            content: "Item dropping is not allowed here."
                        }
                    ],
                    size: 200
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