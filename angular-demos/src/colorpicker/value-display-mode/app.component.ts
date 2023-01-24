import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ColorPickerComponent, ColorValueDisplayMode } from 'smart-webcomponents-angular/colorpicker';
import { RadioButtonComponent, RadioButton } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('colorpicker', { read: ColorPickerComponent, static: false }) colorpicker!: ColorPickerComponent;
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
            colorPicker = that.colorpicker;

        that.options.nativeElement.addEventListener('change', function (event: CustomEvent): void {
            const radioButton: RadioButton = event.target as RadioButton;
            const input: HTMLInputElement = event.target as HTMLInputElement;

            //Set ApplyValueMode and Palette
            if (radioButton && radioButton.groupName === 'valueDisplayMode') {
                colorPicker.valueDisplayMode = radioButton.innerHTML as ColorValueDisplayMode;
                return;
            }

            //Set a new value
            if (input && input.id === 'rgbValue') {
                colorPicker.value = input.value;
            }
        });

        colorPicker.addEventListener('change', function (event: CustomEvent): void {
            that.rgbInput.nativeElement.value = event.detail.value;
        });
    }
}