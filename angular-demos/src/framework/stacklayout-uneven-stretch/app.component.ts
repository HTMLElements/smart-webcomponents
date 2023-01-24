import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
	@ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
	@ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2!: CheckBoxComponent;
	@ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
	@ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        const stackPanel = document.querySelector('.smart-stack-layout');
        const app = new smartApp({
            data: {
                stretch: true,
                verticalStretch: false,
                orientation: 'horizontal'
            }
        });
        app.notify(function (changes) {
            if (changes.propertyName === 'stretch') {
                if (changes.newValue) {
                    stackPanel.classList.add('stretch');
                }
                else {
                    stackPanel.classList.remove('stretch');
                }
            }
            if (changes.propertyName === 'verticalStretch') {
                if (changes.newValue) {
                    stackPanel.classList.add('vertical-stretch');
                }
                else {
                    stackPanel.classList.remove('vertical-stretch');
                }
            }
            if (changes.propertyName === 'orientation') {
                stackPanel.classList.remove('vertical');
            }
            stackPanel.classList.add(changes.newValue);
        });
    

	}	
}