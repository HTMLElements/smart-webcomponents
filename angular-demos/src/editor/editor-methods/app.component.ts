import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
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
    @ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
    @ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
    @ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
    @ViewChild('button7', { read: ButtonComponent, static: false }) button7!: ButtonComponent;
    @ViewChild('button8', { read: ButtonComponent, static: false }) button8!: ButtonComponent;
    @ViewChild('button9', { read: ButtonComponent, static: false }) button9!: ButtonComponent;
    @ViewChild('button10', { read: ButtonComponent, static: false }) button10!: ButtonComponent;
    @ViewChild('button11', { read: ButtonComponent, static: false }) button11!: ButtonComponent;
    @ViewChild('button12', { read: ButtonComponent, static: false }) button12!: ButtonComponent;
    @ViewChild('button13', { read: ButtonComponent, static: false }) button13!: ButtonComponent;
    @ViewChild('editor', { read: EditorComponent, static: false }) editor!: EditorComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const editor = this.editor,
            disableToolbarItemButton = this.button5,
            enableToolbarItemButton = this.button6;

        document.querySelector('.options')!.addEventListener('click', function (event: Event) {
            const target = event.target as HTMLElement;
            const button = target.closest('smart-button');

            if (!button) {
                return;
            }
            const methodName: any = target.closest('smart-button')!.id;
            let value: string;
			let output: any;

            if (methodName === 'disableToolbarItem') {
                value = 'formats';
                disableToolbarItemButton.disabled = true;
                enableToolbarItemButton.disabled = false;
				output = editor.disableToolbarItem('formats')
            }
            else if (methodName === 'enableToolbarItem') {
                value = 'formats';
                disableToolbarItemButton.disabled = false;
                enableToolbarItemButton.disabled = true;
         		output = editor.enableToolbarItem('formats')
			}

         
            if (output instanceof Promise) {
                output.then(o => {
                    if (o) {
                        window.alert(o);
                    }
                })
            }
            else if (output) {
                window.alert(output);
            }
        });
    };
}