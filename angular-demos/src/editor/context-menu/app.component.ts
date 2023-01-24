import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { EditorComponent } from 'smart-webcomponents-angular/editor';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('editor', { read: EditorComponent, static: false }) editor!: EditorComponent;
    @ViewChild('log', { read: ElementRef, static: false }) log!: ElementRef;

    //Properties
    contextMenuDataSource: Function = function (target: HTMLElement, type: string, defaultItems: any[]) {
        if (type === 'table') {
            defaultItems.splice(defaultItems.indexOf('deleteTable'), 1);
            defaultItems.splice(defaultItems.indexOf('deleteRow'), 1);
            defaultItems.splice(defaultItems.indexOf('deleteColumn'), 1);
        }
        if (!defaultItems.find(i => typeof i === 'object' && i.value === 'custoItem1')) {
            defaultItems.push({
                label: 'Custom Delete All Item',
                value: 'customItem1'
            });
        }
        return defaultItems;
    }

    handleContextMenuItemClick(e: CustomEvent) {
        const that = this,
            editor = that.editor,
            log = that.log.nativeElement;

        const itemName = e.detail.value;

        log.innerHTML += `<strong>${itemName}</strong> - Context menu item was clicked <br />`;

        if (itemName === 'customItem1') {
            editor.clearContent();
        }
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