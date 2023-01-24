import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ColorInputComponent } from 'smart-webcomponents-angular/colorinput';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('colorInput', { read: ColorInputComponent, static: false }) colorInput!: ColorInputComponent;

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.


        const colorInput = this.colorInput,
            messages = Object.assign({}, colorInput.messages);

        messages['he'] = {
            'standardColors': 'צבעים סטנדרטיים',
            'themeShadeColors': '',
            'themeColors': 'צבעי נושא'
        };

        colorInput.messages = messages;
        colorInput.placeholder = 'אנא בחר צבע';
    }
}