import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { EditorComponent } from 'smart-webcomponents-angular/editor';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
    @ViewChild('editor', { read: EditorComponent, static: false }) editor!: EditorComponent;

    placeholder: string = 'Please Enter content...';

    toolbarItems: string[] = ['Bold', 'Italic', 'Underline', 'StrikeThrough',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
        'LowerCase', 'UpperCase', '|',
        'Formats', 'Alignment', 'OrderedList', 'UnorderedList',
        'Outdent', 'Indent', '|',
        'hyperlink', 'Image', '|', 'ClearFormat',
        'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'];

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const editor = this.editor;

        document.querySelector('.options').addEventListener('change', function (event) {
            const target = event.target as HTMLElement,
                innerHTML = target.innerHTML;

            if (target instanceof window.Smart.RadioButton) {
                if (innerHTML.indexOf('multiRow') > -1) {
                    editor.toolbarViewMode = 'multiRow';
                }
                else if (innerHTML.indexOf('toggle') > -1) {
                    editor.toolbarViewMode = 'toggle';
                }
                else {
                    editor.toolbarViewMode = 'scroll';
                }
            }
        });
    };
}