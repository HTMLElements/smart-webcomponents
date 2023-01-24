import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { InputComponent } from 'smart-webcomponents-angular/input';


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
	@ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
	@ViewChild('input', { read: InputComponent, static: false }) input!: InputComponent;
	@ViewChild('input2', { read: InputComponent, static: false }) input2!: InputComponent;
	@ViewChild('input3', { read: InputComponent, static: false }) input3!: InputComponent;
	@ViewChild('input4', { read: InputComponent, static: false }) input4!: InputComponent;
	@ViewChild('input5', { read: InputComponent, static: false }) input5!: InputComponent;
	@ViewChild('input6', { read: InputComponent, static: false }) input6!: InputComponent;
	@ViewChild('input7', { read: InputComponent, static: false }) input7!: InputComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    

	}	
}