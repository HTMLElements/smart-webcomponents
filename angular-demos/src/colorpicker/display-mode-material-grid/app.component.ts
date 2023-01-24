import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ColorPickerComponent, ColorApplyValueMode } from 'smart-webcomponents-angular/colorpicker';
import { RadioButtonComponent, RadioButton } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
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
                    const classes = colorPicker.nativeElement.classList;

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
                colorPicker.applyValueMode = radioButton.innerHTML as ColorApplyValueMode;
                return;
            }
        });
    }
}