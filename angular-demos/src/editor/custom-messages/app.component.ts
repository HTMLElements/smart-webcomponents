import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
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
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
    @ViewChild('editor', { read: EditorComponent, static: false }) editor!: EditorComponent;
    @ViewChild('options', { read: ElementRef, static: false }) options!: ElementRef;

    required: boolean = true;

    messageSettings = {
        iconType: 'success',
        autoClose: true,
        autoCloseDelay: 5000
    };

    handleEditorChange() {
        const editor = this.editor,
            messageSettings = this.messageSettings;

        messageSettings.iconType = 'warning';
        messageSettings.autoCloseDelay = 2500;

        editor.getCharCount().then(charCount => {
            editor.showMessage('The Editor value has changed ! Current number of chars inside:' + charCount, messageSettings);
        });
    }

    showMessage() {
        this.editor.showMessage('Show Message button clicked', this.messageSettings);
    }

    hideLastMessage() {
        this.editor.hideLastMessage();
    }

    hideMessages() {
        this.editor.hideMessage();
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
        const that = this,
            editor = that.editor;

        that.options.nativeElement.addEventListener('change', function (event) {
            that.messageSettings.iconType = (<HTMLElement>event.target).id;
        });

        editor.showMessage('Welcome ! A custom message will appear each time value of the Editor is changed', that.messageSettings);
    };
}