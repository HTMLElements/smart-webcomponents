import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { EditorComponent } from 'smart-webcomponents-angular/editor';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2!: CheckBoxComponent;
    @ViewChild('editor', { read: EditorComponent, static: false }) editor!: EditorComponent;

    autoSave: boolean = true;

    autoLoad: boolean = true;

    //The interval in miliseconds
    autoSaveInterval: number = 500;

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
    }

    handleAutoSave() {
        const editor = this.editor;

        editor.autoSave = !editor.autoSave;
    }

    handleAutoLoad() {
        const editor = this.editor;

        editor.autoLoad = !editor.autoLoad;
    }

    handleClick(type: string) {
        const editor = this.editor;

        switch (type) {
            case 'save':
                editor.saveState()
                break;
            case 'load':
                editor.loadState()
                break;
            case 'delete':
                editor.clearState()
                break;
        }
    }
}