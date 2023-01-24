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
    @ViewChild('options', { read: ElementRef, static: false }) options!: ElementRef;
    @ViewChild('rgbInput', { read: ElementRef, static: false }) rgbInput: ElementRef;

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
            const radioButton = event.target as RadioButton;
            const input = event.target as HTMLInputElement;

            if (radioButton && radioButton.groupName === 'applyValueMode') {
                colorPanel.applyValueMode = radioButton.innerHTML as ColorApplyValueMode;
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