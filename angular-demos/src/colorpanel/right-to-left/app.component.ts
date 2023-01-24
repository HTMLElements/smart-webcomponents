import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ColorPanelComponent } from 'smart-webcomponents-angular/colorpanel';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('colorpanel', { read: ColorPanelComponent, static: false }) colorpanel!: ColorPanelComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.


        const colorPanel = this.colorpanel,
            messages = Object.assign({}, colorPanel.messages);

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

        colorPanel.messages = messages;
    }
}