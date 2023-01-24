import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ButtonGroupComponent } from 'smart-webcomponents-angular/buttongroup';
import { InputComponent } from 'smart-webcomponents-angular/input';

@Component({
    selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('buttongroup', { read: ButtonGroupComponent, static: false }) buttongroup: ButtonGroupComponent;
	@ViewChild('input', { read: InputComponent, static: false }) input!: InputComponent;
	@ViewChild('options', { read: ElementRef, static: false }) options!: ElementRef;
	
	dataSource: Array<String> = ["a","b","c"];
	selectionModes: Array<string> = ["none", "one", "zeroOrOne", "zeroOrMany"];
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    const that = this;
    
        that.options.nativeElement.addEventListener('change', function (event: CustomEvent) {
            that.buttongroup.selectionMode = event.detail.value;
        });
	}	
}