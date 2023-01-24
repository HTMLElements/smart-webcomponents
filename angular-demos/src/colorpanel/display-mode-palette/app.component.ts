import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CheckBoxComponent, CheckBox } from 'smart-webcomponents-angular/checkbox';
import { ColorPanelComponent, ColorApplyValueMode } from 'smart-webcomponents-angular/colorpanel';
import { RadioButtonComponent, RadioButton } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2!: CheckBoxComponent;
    @ViewChild('checkbox3', { read: CheckBoxComponent, static: false }) checkbox3!: CheckBoxComponent;
    @ViewChild('checkbox4', { read: CheckBoxComponent, static: false }) checkbox4!: CheckBoxComponent;
    @ViewChild('colorpanel', { read: ColorPanelComponent, static: false }) colorpanel!: ColorPanelComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
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

        that.options.nativeElement.addEventListener('change', function (event: CustomEvent) {
            const radioButton = event.target as RadioButton,
                checkBox = event.target as CheckBox,
                input = event.target as HTMLInputElement;

            //Set new Grid Item size
            if (radioButton instanceof window.Smart.RadioButton) {
                colorPanel.applyValueMode = radioButton.innerHTML as ColorApplyValueMode;
                return;
            }
            else if (checkBox instanceof window.Smart.CheckBox) {
                colorPanel[checkBox.id] = (event as CustomEvent).detail.value;
            }
            else if (input instanceof HTMLInputElement && input.id === 'rgbValue') {
                colorPanel.value = input.value!;
            }
        });

        colorPanel.addEventListener('change', function (event: CustomEvent): void {
            that.rgbInput.nativeElement.value = event.detail.value;
        });
    }
}