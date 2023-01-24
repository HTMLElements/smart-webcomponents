import { Component, ViewEncapsulation, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None,
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
	@ViewChild('radiobuttonleft', { read: RadioButtonComponent, static: false }) radiobuttonleft!: RadioButtonComponent;
	@ViewChild('radiobuttonright', { read: RadioButtonComponent, static: false }) radiobuttonright!: RadioButtonComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
		const list = this.dropdownlist;
		
        this.radiobuttonleft.addEventListener('change', function ():void {
            list.dropDownButtonPosition = 'left';
		});
		
        this.radiobuttonright.addEventListener('change', function ():void {
            list.dropDownButtonPosition = 'right';
        });
    

	}	
}