import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { TextBoxComponent } from 'smart-webcomponents-angular/textbox';
import { ButtonComponent } from 'smart-webcomponents-angular/button';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox!: TextBoxComponent;
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('log', { read: ElementRef, static: false }) log: ElementRef;

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
            textBox = that.textbox,
            button = that.button,
            label = ['One', 'Two', 'Three', 'Four', 'Five'];

        textBox.addEventListener('change', function (event: any): void {
            that.log.nativeElement.innerHTML += '<br>' + '<b>' + event.type + '</b>' + ' event fired with details: ' +
                'newValue: <b>' + event.detail.newValue + '</b>' + ', oldValue: <b>' + event.detail.oldValue + '</b>';
        });

        button.addEventListener('click', function ():void {
            const oldValue = textBox.value;

            textBox.value = label[Math.floor(Math.random() * Math.floor(5))];

            //Fire a 'change' event with details
            textBox.nativeElement.$.fireEvent('change', { newValue: textBox.value, oldValue: oldValue });
        });
    }
}