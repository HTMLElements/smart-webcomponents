import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ComboBoxComponent } from 'smart-webcomponents-angular/combobox';
import { TextBoxComponent } from 'smart-webcomponents-angular/textbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('combobox', { read: ComboBoxComponent, static: false }) combobox!: ComboBoxComponent;
	@ViewChild('combobox2', { read: ComboBoxComponent, static: false }) combobox2: ComboBoxComponent;
	@ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox!: TextBoxComponent;
	@ViewChild('textbox2', { read: TextBoxComponent, static: false }) textbox2!: TextBoxComponent;
	@ViewChild('textbox3', { read: TextBoxComponent, static: false }) textbox3!: TextBoxComponent;
	@ViewChild('textbox4', { read: TextBoxComponent, static: false }) textbox4!: TextBoxComponent;
	@ViewChild('textbox5', { read: TextBoxComponent, static: false }) textbox5!: TextBoxComponent;
	@ViewChild('textbox6', { read: TextBoxComponent, static: false }) textbox6!: TextBoxComponent;
	@ViewChild('textbox7', { read: TextBoxComponent, static: false }) textbox7!: TextBoxComponent;
	@ViewChild('textbox8', { read: TextBoxComponent, static: false }) textbox8!: TextBoxComponent;
	@ViewChild('textbox9', { read: TextBoxComponent, static: false }) textbox9!: TextBoxComponent;
	@ViewChild('textbox10', { read: TextBoxComponent, static: false }) textbox10!: TextBoxComponent;
	
 
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