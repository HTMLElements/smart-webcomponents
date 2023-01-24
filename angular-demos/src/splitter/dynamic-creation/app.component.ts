import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SplitterComponent, SplitterItem } from 'smart-webcomponents-angular/splitter';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('splitter', { read: SplitterComponent, static: false }) splitter!: SplitterComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.

        const splitter = document.querySelector('smart-splitter');
        let counter = 2;

        splitter.addEventListener('dblclick', function (event: CustomEvent): void {
            const splitterItem: SplitterItem = (<HTMLElement>event.target).closest('smart-splitter-item');

            if (splitterItem) {
                const splitterItemNumber = parseFloat('' + splitterItem.textContent);

                splitterItem.content = '<smart-splitter>' +
                    '<smart-splitter-item>' + splitterItem.innerHTML + '</smart-splitter-item>' +
                    '<smart-splitter-item>New Item' + '</smart-splitter-item>' +
                    '</smart-splitter>';
                    
                counter = splitterItemNumber;
            }
        });


    }
}