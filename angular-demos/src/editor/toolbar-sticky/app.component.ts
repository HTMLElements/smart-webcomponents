import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { SwitchButtonComponent } from 'smart-webcomponents-angular/switchbutton';
import { EditorComponent } from 'smart-webcomponents-angular/editor';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('switchbutton', { read: SwitchButtonComponent, static: false }) switchbutton!: SwitchButtonComponent;
    @ViewChild('editor', { read: EditorComponent, static: false }) editor!: EditorComponent;

    toolbarItems: string[] = ['Bold', 'Italic', 'Underline', 'StrikeThrough',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignment', 'OrderedList', 'UnorderedList',
        'Outdent', 'Indent', '|',
        'hyperlink', 'Image', '|', 'ClearFormat',
        'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'];

    toolbarSticky: boolean = true;

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
    }

    handleChange(event: CustomEvent) {
        this.editor.toolbarSticky = event.detail.value;
    }
}