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
    @ViewChild('colorpicker', { read: ColorPickerComponent, static: false }) colorpicker: ColorPickerComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
    @ViewChild('radiobutton4', { read: RadioButtonComponent, static: false }) radiobutton4!: RadioButtonComponent;
    @ViewChild('radiobutton5', { read: RadioButtonComponent, static: false }) radiobutton5!: RadioButtonComponent;
    @ViewChild('radiobutton6', { read: RadioButtonComponent, static: false }) radiobutton6!: RadioButtonComponent;
    @ViewChild('radiobutton7', { read: RadioButtonComponent, static: false }) radiobutton7!: RadioButtonComponent;
    @ViewChild('radiobutton8', { read: RadioButtonComponent, static: false }) radiobutton8!: RadioButtonComponent;
    @ViewChild('radiobutton9', { read: RadioButtonComponent, static: false }) radiobutton9!: RadioButtonComponent;
    @ViewChild('radiobutton10', { read: RadioButtonComponent, static: false }) radiobutton10!: RadioButtonComponent;
    @ViewChild('radiobutton11', { read: RadioButtonComponent, static: false }) radiobutton11!: RadioButtonComponent;
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

        //Palette Colors for pallette = 'custom'
        colorPicker.paletteColors = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'];

        //Pre-set Palette Custom Colors ( User selected colors )
        colorPicker.paletteCustomColors = ['#808080', '#ffd8b1', '#aaffc3'];

        that.options.nativeElement.addEventListener('change', function (event) {
            const radioButton: RadioButton = event.target as RadioButton;
            const checkBox: CheckBox = event.target as CheckBox;

            //Set new Grid Item size
            if (radioButton.groupName === 'columnSettings') {
                let size,
                    className = 'column-count';

                switch (radioButton.innerHTML) {
                    case '4':
                        size = 'small';
                        break;
                    case '8':
                        size = 'medium';
                        break;
                    case '14':
                        size = 'large';
                        break;
                }
                //Remove the oldClass
                const classes = colorPicker.nativeElement.classList;

                for (let i = 0; i < classes.length; i++) {
                    if (classes[i].indexOf(className) > -1) {
                        classes.remove(classes.item(i));
                    }
                }

                classes.add(className + '-' + size);
                return;
            }

            //Set new Grid Item size
            if (radioButton && radioButton.groupName === 'columnSettings') {
                colorPicker.columnCount = parseInt(radioButton.innerHTML);
                return;
            }
            if (radioButton && radioButton.groupName === 'palette') {
                colorPicker.palette = radioButton.innerHTML as ColorPalette;
                return;
            }
            //Set new Grid Item size
            if (radioButton && radioButton.groupName === 'applyValueMode') {
                colorPicker.applyValueMode = radioButton.innerHTML as ColorApplyValueMode;
                return;
            }
            if (checkBox && checkBox.id === 'enableCustomColors') {
                colorPicker.enableCustomColors = checkBox.checked;
                return;
            }
        });
    }
}