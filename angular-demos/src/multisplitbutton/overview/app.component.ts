import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { MultiSplitButtonComponent } from 'smart-webcomponents-angular/multisplitbutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
	@ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
	@ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
	@ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
	@ViewChild('multisplitbutton', { read: MultiSplitButtonComponent, static: false }) multisplitbutton!: MultiSplitButtonComponent;
	@ViewChild('multisplitbutton2', { read: MultiSplitButtonComponent, static: false }) multisplitbutton2!: MultiSplitButtonComponent;
	@ViewChild('multisplitbutton3', { read: MultiSplitButtonComponent, static: false }) multisplitbutton3!: MultiSplitButtonComponent;
	@ViewChild('multisplitbutton4', { read: MultiSplitButtonComponent, static: false }) multisplitbutton4!: MultiSplitButtonComponent;
	@ViewChild('multisplitbutton5', { read: MultiSplitButtonComponent, static: false }) multisplitbutton5!: MultiSplitButtonComponent;
	@ViewChild('multisplitbutton6', { read: MultiSplitButtonComponent, static: false }) multisplitbutton6!: MultiSplitButtonComponent;
	@ViewChild('multisplitbutton7', { read: MultiSplitButtonComponent, static: false }) multisplitbutton7!: MultiSplitButtonComponent;
	@ViewChild('multisplitbutton8', { read: MultiSplitButtonComponent, static: false }) multisplitbutton8!: MultiSplitButtonComponent;
	@ViewChild('multisplitbutton9', { read: MultiSplitButtonComponent, static: false }) multisplitbutton9!: MultiSplitButtonComponent;
	@ViewChild('multisplitbutton10', { read: MultiSplitButtonComponent, static: false }) multisplitbutton10!: MultiSplitButtonComponent;
	@ViewChild('multisplitbutton11', { read: MultiSplitButtonComponent, static: false }) multisplitbutton11!: MultiSplitButtonComponent;
	@ViewChild('multisplitbutton12', { read: MultiSplitButtonComponent, static: false }) multisplitbutton12!: MultiSplitButtonComponent;
	@ViewChild('multisplitbutton13', { read: MultiSplitButtonComponent, static: false }) multisplitbutton13!: MultiSplitButtonComponent;
	@ViewChild('multisplitbutton14', { read: MultiSplitButtonComponent, static: false }) multisplitbutton14!: MultiSplitButtonComponent;
	@ViewChild('multisplitbutton15', { read: MultiSplitButtonComponent, static: false }) multisplitbutton15!: MultiSplitButtonComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    // Your code here.

	}	
}