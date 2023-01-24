import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CheckBoxComponent, CheckBox } from 'smart-webcomponents-angular/checkbox';
import { ColorPickerComponent, ColorPalette, ColorApplyValueMode } from 'smart-webcomponents-angular/colorpicker';
import { RadioButtonComponent, RadioButton } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('colorpicker', { read: ColorPickerComponent, static: false }) colorpicker!: ColorPickerComponent;
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
            colorPicker = that.colorpicker;

        that.options.nativeElement.addEventListener('change', function (event: CustomEvent): void {
            const radioButton: RadioButton = event.target as RadioButton;
            const checkBox: CheckBox = event.target as CheckBox;
            const input: HTMLInputElement = event.target as HTMLInputElement;

            if (radioButton.groupName === 'columnSettings') {
                colorPicker.columnCount = parseInt(radioButton.innerHTML);
                return;
            }
            if (checkBox && checkBox.id === 'inverted') {
                colorPicker.inverted = checkBox.checked;
                return;
            }
            //Set ApplyValueMode and Palette
            if (radioButton.groupName === 'applyValueMode') {
                colorPicker.applyValueMode = radioButton.innerHTML as ColorApplyValueMode;
            }

            //Set ApplyValueMode and Palette
            if (radioButton && radioButton.groupName === 'palette') {
                colorPicker.palette = radioButton.innerHTML as ColorPalette;
                return;
            }
        });
    }
}