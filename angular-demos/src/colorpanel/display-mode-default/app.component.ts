import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CheckBoxComponent, CheckBox } from 'smart-webcomponents-angular/checkbox';
import { ColorPanelComponent } from 'smart-webcomponents-angular/colorpanel';
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
    @ViewChild('radiobutton6', { read: RadioButtonComponent, static: false }) radiobutton6!: RadioButtonComponent;
    @ViewChild('rgbaInput', { read: ElementRef, static: false }) rgbaInput!: ElementRef;
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

        that.options.nativeElement.addEventListener('change', function (event: CustomEvent): void {
            const radioButton: RadioButton = event.target as RadioButton;
            const checkBox: CheckBox = event.target as CheckBox;
            const input: HTMLInputElement = event.target as HTMLInputElement;

            //Set new Grid Item size
            if (radioButton && radioButton.groupName === 'gridSettings' ||
                radioButton && radioButton.groupName === 'gapSettings') {
                let size,
                    className = radioButton.groupName === 'gridSettings' ? 'item-size' : 'column-gap';

                switch (radioButton.innerHTML) {
                    case '10':
                    case '1':
                        size = 'small';
                        break;
                    case '20':
                    case '2.5':
                        size = 'medium';
                        break;
                    case '30':
                    case '5':
                        size = 'large';
                        break;
                }

                //Remove the oldClass
                const classes = colorPanel.nativeElement.classList;

                for (let i = 0; i < classes.length; i++) {
                    if (classes[i].indexOf(className) > -1) {
                        colorPanel.nativeElement.classList.remove(colorPanel.nativeElement.classList.item(i));
                    }
                }
                colorPanel.nativeElement.classList.add(className + '-' + size);
                return;
            }
            if (checkBox && checkBox.id === 'enableCustomColors') {
                colorPanel.enableCustomColors = checkBox.checked;
                return;
            }
            //Set a new value
            if (input && input.id === 'rgbValue') {
                colorPanel.value = input.value;
            }
        });

        colorPanel.addEventListener('change', function (event: CustomEvent): void {
            that.rgbaInput.nativeElement.value = event.detail.value;
        });
    }
}