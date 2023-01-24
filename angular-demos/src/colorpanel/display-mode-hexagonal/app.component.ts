import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CheckBoxComponent, CheckBox } from 'smart-webcomponents-angular/checkbox';
import { ColorPanelComponent, ColorPalette } from 'smart-webcomponents-angular/colorpanel';
import { RadioButtonComponent, RadioButton } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('colorpanel', { read: ColorPanelComponent, static: false }) colorpanel!: ColorPanelComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
    @ViewChild('radiobutton4', { read: RadioButtonComponent, static: false }) radiobutton4!: RadioButtonComponent;
    @ViewChild('radiobutton5', { read: RadioButtonComponent, static: false }) radiobutton5!: RadioButtonComponent;
    @ViewChild('options', { read: ElementRef, static: false }) options!: ElementRef;
    @ViewChild('rgbaInput', { read: ElementRef, static: false }) rgbaInput: ElementRef;


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
            const checkBox: CheckBox = event.target as CheckBox;
            const input: HTMLInputElement = event.target as HTMLInputElement;

            if (radioButton instanceof window.Smart.RadioButton) {
                colorPanel.palette = radioButton.innerHTML as ColorPalette;
                return;
            }
            else if (checkBox instanceof window.Smart.CheckBox) {
                colorPanel[checkBox.id] = event.detail.value;
            }
            else if (input instanceof HTMLInputElement && input.id === 'rgbValue') {
                colorPanel.value = input.value;
            }
        });

        that.colorpanel.addEventListener('change', function (event: CustomEvent): void {
            that.rgbaInput.nativeElement.value = event.detail.value;
        });
    }
}