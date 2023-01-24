import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ColorPanelComponent, ColorDisplayMode } from 'smart-webcomponents-angular/colorpanel';
import { RadioButtonComponent, RadioButton } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('colorpanel', { read: ColorPanelComponent, static: false }) colorpanel!: ColorPanelComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
    @ViewChild('radiobutton4', { read: RadioButtonComponent, static: false }) radiobutton4!: RadioButtonComponent;
    @ViewChild('radiobutton5', { read: RadioButtonComponent, static: false }) radiobutton5!: RadioButtonComponent;
    @ViewChild('radiobutton6', { read: RadioButtonComponent, static: false }) radiobutton6!: RadioButtonComponent;
    @ViewChild('radiobutton7', { read: RadioButtonComponent, static: false }) radiobutton7!: RadioButtonComponent;
    @ViewChild('radiobutton8', { read: RadioButtonComponent, static: false }) radiobutton8: RadioButtonComponent;
    @ViewChild('radiobutton9', { read: RadioButtonComponent, static: false }) radiobutton9: RadioButtonComponent;
    @ViewChild('radiobutton10', { read: RadioButtonComponent, static: false }) radiobutton10: RadioButtonComponent;
    @ViewChild('options', { read: ElementRef, static: false }) options!: ElementRef;


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
            colorPanel = that.colorpanel;

        colorPanel.messages = {
            'en': {
                'redPrefix': 'R:',
                'greenPrefix': 'G:',
                'bluePrefix': 'B:',
                'hexPrefix': '#:',
                'alphaPrefix': 'Alpha:',
                'ok': 'OK',
                'cancel': 'CANCEL',
                'customColor': 'CUSTOM COLOR ...',
                'standardColors': 'Standard colors',
                'themeColors': 'Theme colors'
            },
            'de': {
                'redPrefix': 'R',
                'greenPrefix': 'G',
                'bluePrefix': 'B',
                'hexPrefix': '#',
                'alphaPrefix': 'Alpha',
                'ok': 'OK',
                'cancel': 'STORNIEREN',
                'customColor': 'FREIWAEHLBARE FARBE ...',
                'standardColors': 'Standardfarben',
                'themeColors': 'Themenfarben'
            },
            'fr': {
                'redPrefix': 'R:',
                'greenPrefix': 'G:',
                'bluePrefix': 'B:',
                'hexPrefix': '#',
                'alphaPrefix': 'Alpha =',
                'ok': ' APPROUVER',
                'cancel': 'ANNULER',
                'customColor': 'COULEUR PERSONNALISEE ...',
                'standardColors': 'Couleurs standard',
                'themeColors': 'Couleurs du thème'
            }
        };

        that.options.nativeElement.addEventListener('change', function (event: CustomEvent) {
            const target: RadioButton = event.target as RadioButton;

            if (target.groupName === 'displayMode') {
                colorPanel.displayMode = target.innerHTML as ColorDisplayMode;
                return;
            }
            if (target.groupName === 'locale') {
                colorPanel.locale = target.innerHTML;
            }
        });
    }
}