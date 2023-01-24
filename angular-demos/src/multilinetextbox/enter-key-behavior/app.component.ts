import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { MultilineTextBoxComponent } from 'smart-webcomponents-angular/multilinetextbox';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { WindowComponent } from 'smart-webcomponents-angular/window';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('multilinetextbox', { read: MultilineTextBoxComponent, static: false }) multilinetextbox!: MultilineTextBoxComponent;
    @ViewChild('multilinetextbox2', { read: MultilineTextBoxComponent, static: false }) multilinetextbox2!: MultilineTextBoxComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
    @ViewChild('window', { read: WindowComponent, static: false }) window!: WindowComponent;
    @ViewChild('window2', { read: WindowComponent, static: false }) window2!: WindowComponent;
    @ViewChild('messageContainer', { read: ElementRef, static: false }) messageContainer!: ElementRef;


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
            messages = [];

        that.button.addEventListener('click', function (event) {
            that.window.open();
            that.window2.open();
        });
        that.multilinetextbox.addEventListener('change', function (event: CustomEvent) {
            updateMessageContainer(event, 'J');
        });
        that.multilinetextbox2.addEventListener('change', function (event: CustomEvent) {
            updateMessageContainer(event, 'S');
        });
        that.radiobutton.addEventListener('change', function () {
            enterKeyBehaviorTo('clearOnSubmit');
        });
        that.radiobutton2.addEventListener('change', function () {
            enterKeyBehaviorTo('submit');
        });
        that.radiobutton3.addEventListener('change', function () {
            enterKeyBehaviorTo('newLine');
        });
        function updateMessageContainer(event: CustomEvent, user: string) {
            if (!event.detail || event.detail.type !== 'submit') {
                return;
            }
            const value = event.detail.value,
                messageChip = document.createElement('smart-chip');
            messages.push(value);
            messageChip.value = value.replace(/(!:\r\n|\r|\n)/g, '<br/>');
            messageChip.avatar = user;
            that.messageContainer.nativeElement.appendChild(messageChip);
        }
        function enterKeyBehaviorTo(option) {
            that.multilinetextbox.enterKeyBehavior = option;
            that.multilinetextbox2.enterKeyBehavior = option;
        }
    }
}