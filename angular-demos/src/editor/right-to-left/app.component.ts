import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { EditorComponent, ToolbarItem } from 'smart-webcomponents-angular/editor';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('editor', { read: EditorComponent, static: false }) editor!: EditorComponent;

    toolbarItems: any = [{
        name: 'bold',
    },
    {
        name: 'italic',
    },
        'Underline', 'StrikeThrough', 'hyperlink', 'removeLink', 'copy', 'cut', 'paste', 'alignment', 'table', 'image', 'sourcecode',
    {
        name: 'formats',
        dataSource: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code', 'blockquote']
    },
        'splitmode', 'undo', 'redo', 'LowerCase', 'UpperCase', 'OrderedList', 'UnorderedList', 'Outdent', 'Indent',
    ];

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
    }
}