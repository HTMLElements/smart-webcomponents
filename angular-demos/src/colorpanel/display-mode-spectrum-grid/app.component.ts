import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { ColorPanelComponent, ColorApplyValueMode, ColorPalette } from 'smart-webcomponents-angular/colorpanel';
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
    @ViewChild('radiobutton7', { read: RadioButtonComponent, static: false }) radiobutton7!: RadioButtonComponent;
    @ViewChild('radiobutton8', { read: RadioButtonComponent, static: false }) radiobutton8!: RadioButtonComponent;
    @ViewChild('radiobutton9', { read: RadioButtonComponent, static: false }) radiobutton9!: RadioButtonComponent;
    @ViewChild('radiobutton10', { read: RadioButtonComponent, static: false }) radiobutton10!: RadioButtonComponent;
    @ViewChild('radiobutton11', { read: RadioButtonComponent, static: false }) radiobutton11!: RadioButtonComponent;
    @ViewChild('radiobutton12', { read: RadioButtonComponent, static: false }) radiobutton12!: RadioButtonComponent;
    @ViewChild('radiobutton13', { read: RadioButtonComponent, static: false }) radiobutton13!: RadioButtonComponent;
    @ViewChild('radiobutton14', { read: RadioButtonComponent, static: false }) radiobutton14!: RadioButtonComponent;
    @ViewChild('radiobutton15', { read: RadioButtonComponent, static: false }) radiobutton15!: RadioButtonComponent;
    @ViewChild('radiobutton16', { read: RadioButtonComponent, static: false }) radiobutton16!: RadioButtonComponent;
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
            const target: RadioButton = event.target as RadioButton;

            //Set new Grid Item size
            if (target.groupName === 'columnCount' || target.groupName === 'columnSize' || target.groupName === 'columnGap') {
                if (target.groupName === 'columnCount') {
                    colorPanel.columnCount = parseInt(target.innerHTML);
                    return
                }
    
                let className = target.groupName === 'columnSize' ? 'item-size' : 'column-gap', size: string;
    
                switch (target.innerHTML) {
                    case '3':
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
                const classes = colorPanel.nativeElement.classList;

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
                colorPanel.applyValueMode = target.innerHTML as ColorApplyValueMode;
                return;
            }

            if (target.groupName === 'palette') {
                colorPanel.palette = target.innerHTML as ColorPalette;
                return;
            }

            //Set inverted mode
            if (target.id === 'inverted') {
                colorPanel.inverted = event.detail.value;
                return;
            }

            //Set a new value
            if (target.id === 'rgbValue') {
                colorPanel.value = target.value;
            }
        });

        colorPanel.addEventListener('change', function (event: CustomEvent): void {
            that.rgbInput.nativeElement.value = event.detail.value;
        });
    }
}