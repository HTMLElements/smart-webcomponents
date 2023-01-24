import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { EditorComponent, PasteFormat, ToolbarItem } from 'smart-webcomponents-angular/editor';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('editor', { read: EditorComponent, static: false }) editor!: EditorComponent;

    pasteFormat: PasteFormat = 'prompt';

	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code
        const editor = this.editor;

        editor.toolbarItems = (() => {
            const customToolbarItems = editor.toolbarItems.slice();
    
            customToolbarItems.push({
                name: 'paste',
                advanced: true
            });
    
            return customToolbarItems;
        })();
    }
}