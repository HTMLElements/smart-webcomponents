import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ColorPickerComponent } from 'smart-webcomponents-angular/colorpicker';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('colorpicker', { read: ColorPickerComponent, static: false }) colorpicker!: ColorPickerComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.


        const colorPicker = this.colorpicker,
            messages = Object.assign({}, colorPicker.messages);

        messages['he'] = {
            'redPrefix': 'ר:',
            'greenPrefix': 'ז:',
            'bluePrefix': 'ב:',
            'hexPrefix': '#:',
            'alphaPrefix': 'אלפא:',
            'ok': 'בסדר',
            'cancel': 'בטל',
            'customColor': 'צבע מותאם אישית',
            'standardColors': 'צבעים סטנדרטיים',
            'themeColors': 'צבעי נושא'
        };
        
        colorPicker.messages = messages;
        colorPicker.placeholder = 'אנא בחר צבע';
    }
}