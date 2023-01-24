import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ColorPanelComponent, ColorApplyValueMode } from 'smart-webcomponents-angular/colorpanel';
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
    @ViewChild('radiobutton8', { read: RadioButtonComponent, static: false }) radiobutton8!: RadioButtonComponent;
    @ViewChild('options', { read: ElementRef, static: false }) options!: ElementRef;
    @ViewChild('rgbInput', { read: ElementRef, static: false }) rgbInput!: ElementRef;


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

        that.options.nativeElement.addEventListener('change', function (event: CustomEvent): void {
            const radioButton: RadioButton = event.target as RadioButton;
            const input: HTMLInputElement = event.target as HTMLInputElement;

            //Set new Grid Item size
            if (radioButton) {
                if (radioButton.groupName === 'columnSize' || radioButton.groupName === 'columnGap') {
                    let size: string,
                        className = radioButton.groupName === 'columnSize' ? 'item-size' : 'column-gap';

                    switch (radioButton.innerHTML) {
                        case '1':
                        case '20':
                            size = 'small';
                            break;
                        case '5':
                        case '40':
                            size = 'medium';
                            break;
                        case '10':
                        case '60':
                            size = 'large';
                            break;
                    }

                    //Remove the oldClass
                    const classes = colorPanel.nativeElement.classList;

                    for (let i = 0; i < classes.length; i++) {
                        if (classes[i].indexOf(className) > -1) {
                            classes.remove(classes.item(i));
                        }
                    }
                    classes.add(className + '-' + size);
                    return;
                }
            }
            //Set ApplyValueMode and Palette
            if (radioButton.groupName === 'applyValueMode') {
                colorPanel.applyValueMode = radioButton.innerHTML as ColorApplyValueMode;
                return;
            }

            //Set a new value
            if (input && input.id === 'rgbValue') {
                colorPanel.value = input.value;
            }
        });

        colorPanel.addEventListener('change', function (event: CustomEvent): void {
            that.rgbInput.nativeElement.value = event.detail.value;
        });
    }
}