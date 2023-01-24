import { Component,ViewEncapsulation,  ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None,
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
	@ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
	@ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
	@ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
	@ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
	@ViewChild('dropdownlist2', { read: DropDownListComponent, static: false }) dropdownlist2!: DropDownListComponent;
	@ViewChild('dropdownlist3', { read: DropDownListComponent, static: false }) dropdownlist3!: DropDownListComponent;
	@ViewChild('dropdownlist4', { read: DropDownListComponent, static: false }) dropdownlist4!: DropDownListComponent;
	@ViewChild('dropdownlist5', { read: DropDownListComponent, static: false }) dropdownlist5!: DropDownListComponent;
	@ViewChild('dropdownlist6', { read: DropDownListComponent, static: false }) dropdownlist6!: DropDownListComponent;
	@ViewChild('dropdownlist7', { read: DropDownListComponent, static: false }) dropdownlist7!: DropDownListComponent;
	@ViewChild('dropdownlist8', { read: DropDownListComponent, static: false }) dropdownlist8!: DropDownListComponent;
	@ViewChild('dropdownlist9', { read: DropDownListComponent, static: false }) dropdownlist9!: DropDownListComponent;
	@ViewChild('dropdownlist10', { read: DropDownListComponent, static: false }) dropdownlist10!: DropDownListComponent;
	@ViewChild('dropdownlist11', { read: DropDownListComponent, static: false }) dropdownlist11!: DropDownListComponent;
	@ViewChild('dropdownlist12', { read: DropDownListComponent, static: false }) dropdownlist12!: DropDownListComponent;
	@ViewChild('dropdownlist13', { read: DropDownListComponent, static: false }) dropdownlist13!: DropDownListComponent;
	@ViewChild('dropdownlist14', { read: DropDownListComponent, static: false }) dropdownlist14!: DropDownListComponent;
	@ViewChild('dropdownlist15', { read: DropDownListComponent, static: false }) dropdownlist15!: DropDownListComponent;
	
 
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