import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CheckBoxComponent, CheckBox } from 'smart-webcomponents-angular/checkbox';
import { RadioButtonComponent, RadioButton } from 'smart-webcomponents-angular/radiobutton';
import { ColorPickerComponent } from 'smart-webcomponents-angular/colorpicker';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('colorPicker', { read: ColorPickerComponent, static: false }) colorPicker: ColorPickerComponent;
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
            colorPicker = that.colorPicker;

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
                const classes = colorPicker.nativeElement.classList;

                for (let i = 0; i < classes.length; i++) {
                    if (classes[i].indexOf(className) > -1) {
                        colorPicker.nativeElement.classList.remove(colorPicker.nativeElement.classList.item(i));
                    }
                }
                colorPicker.nativeElement.classList.add(className + '-' + size);
                return;
            }
            
            if (checkBox && checkBox.id === 'enableCustomColors') {
                colorPicker.enableCustomColors = checkBox.checked;
                return;
            }
        });
    

	}	
}