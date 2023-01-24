import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
	@ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
	@ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
	@ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
	@ViewChild('radiobutton4', { read: RadioButtonComponent, static: false }) radiobutton4!: RadioButtonComponent;
	@ViewChild('radiobutton5', { read: RadioButtonComponent, static: false }) radiobutton5!: RadioButtonComponent;
	@ViewChild('radiobutton6', { read: RadioButtonComponent, static: false }) radiobutton6!: RadioButtonComponent;
	@ViewChild('radiobutton7', { read: RadioButtonComponent, static: false }) radiobutton7!: RadioButtonComponent;
	@ViewChild('radiobutton8', { read: RadioButtonComponent, static: false }) radiobutton8!: RadioButtonComponent;
	
 
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
                horizontalAlignment: 'left',
                verticalAlignment: 'top',
                orientation: 'horizontal'
            }
        });
        app.notify(function (changes) {
            if (changes.propertyName === 'horizontalAlignment') {
                stackPanel.classList.remove('left', 'right', 'center');
            }
            if (changes.propertyName === 'verticalAlignment') {
                stackPanel.classList.remove('top', 'bottom', 'middle');
            }
            if (changes.propertyName === 'orientation') {
                stackPanel.classList.remove('vertical');
            }
            stackPanel.classList.add(changes.newValue);
        });
    

	}	
}