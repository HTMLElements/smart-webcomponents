import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { SplitterComponent } from 'smart-webcomponents-angular/splitter';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('splitter', { read: SplitterComponent, static: false }) splitter!: SplitterComponent;

    dataSource: Array<object> = [
        {
            id: 'item00',
            collapsible: true,
            content: `Left Pane`,
            size: 200
        },
        {
            id: 'item01',
            content: '<smart-splitter id="nestedSplitter0" orientation="horizontal">' +
                '<smart-splitter-item size=200 collapsible id="item02" collapsible>Nested Splitter Top Pane</smart-splitter-item>' +
                '<smart-splitter-item id="item03">Nested Splitter Bottom Content</smart-splitter-item>' +
                '</smart-splitter>'
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