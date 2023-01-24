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
    @ViewChild('colorpicker', { read: ColorPickerComponent, static: false }) colorpicker: ColorPickerComponent;
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
            const target: RadioButton = event.target as RadioButton;

            //Set new Grid Item size
            if (target.groupName === 'columnCount' || target.groupName === 'columnSize' || target.groupName === 'columnGap') {
                let size,
                    className = target.groupName === 'columnCount' ? 'column-count' :
                        (target.groupName === 'columnSize' ? 'item-size' : 'column-gap');

                switch (target.innerHTML) {
                    case '3':
                    case '5':
                    case '20':
                        size = 'small';
                        break;
                    case '6':
                    case '10':
                    case '40':
                        size = 'medium';
                        break;
                    case '15':
                    case '9':
                    case '60':
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

            //Set ApplyValueMode and Palette
            if (target.groupName === 'applyValueMode') {
                colorPicker.applyValueMode = target.innerHTML as ColorApplyValueMode;
                return;
            }

            if (target.groupName === 'palette') {
                colorPicker.palette = target.innerHTML as ColorPalette;
                return;
            }

            //Set inverted mode
            if ((<CheckBox>target).id === 'inverted') {
                colorPicker.inverted = event.detail.value;
                return;
            }
        });
    }
}