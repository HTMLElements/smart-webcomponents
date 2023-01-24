import { Component, ViewChild, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { DropDownButtonComponent } from 'smart-webcomponents-angular/dropdownbutton';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('buttonOpen', { read: ButtonComponent, static: false }) buttonOpen!: ButtonComponent;
    @ViewChild('buttonClose', { read: ButtonComponent, static: false }) buttonClose!: ButtonComponent;
    @ViewChild('buttonAppendChild', { read: ButtonComponent, static: false }) buttonAppendChild!: ButtonComponent;
    @ViewChild('buttonRemoveChild', { read: ButtonComponent, static: false }) buttonRemoveChild!: ButtonComponent;
    @ViewChild('buttonClear', { read: ButtonComponent, static: false }) buttonClear!: ButtonComponent;
    @ViewChild('buttonDisable', { read: ButtonComponent, static: false }) buttonDisable!: ButtonComponent;
    @ViewChild('dropdownbutton', { read: DropDownButtonComponent, static: false }) dropdownbutton!: DropDownButtonComponent;

    constructor(private renderer: Renderer2) {

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
            dropDownButton = that.dropdownbutton;

            that.buttonOpen.nativeElement.onclick = function (): void {
            dropDownButton.open();
        };

        that.buttonClose.nativeElement.onclick = function (): void {
            dropDownButton.close();
        };

        that.buttonClear.nativeElement.onclick = function (): void {
            dropDownButton.removeAll();
        };

        that.buttonAppendChild.nativeElement.onclick = function (): void {
            let button = that.renderer.createElement('smart-button');

            button.id = 'simpleButton';
            button.innerHTML = 'Button';

            that.renderer.appendChild(dropDownButton, button);
        };

        that.buttonRemoveChild.nativeElement.onclick = function (): void {
            let button = dropDownButton.nativeElement.querySelector('#simpleButton');

            if (button) {
                that.renderer.removeChild(dropDownButton, button);
            }
        };

        that.buttonDisable.nativeElement.onclick = function (): void {
            dropDownButton.disabled = !dropDownButton.disabled;
        };
    }
}