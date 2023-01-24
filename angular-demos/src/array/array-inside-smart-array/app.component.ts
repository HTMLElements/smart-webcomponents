import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ArrayComponent } from 'smart-webcomponents-angular/array';
import { ButtonComponent } from 'smart-webcomponents-angular/button';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

	
export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('array', { read: ArrayComponent, static: false }) smartArray!: ArrayComponent;
 	@ViewChild('resetMainArray', { read: ButtonComponent, static: false }) resetMainArray!: ButtonComponent;
 	@ViewChild('emptyMainArray', { read: ButtonComponent, static: false }) emptyMainArray!: ButtonComponent;
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	
	elementTemplate(element, dimensions): void {
		const innerArray = document.createElement('smart-array');
		innerArray.showIndexDisplay = true;
		innerArray.type = 'string';
		innerArray.dimensions = 2;
		innerArray.rows = 3;
		innerArray.columns = 2;
		element.appendChild(innerArray);
	}

	getElementValue(element, dimensions): void {
		return element.firstChild.value;
	}

	setElementValue(value, element, dimensions): void {
		element.firstChild.value = value;
	}
	
	init(): void {
		// init code.
	    const that = this;
		const log = document.getElementById('log');

		that.smartArray.addEventListener('change', function (event: any) {
			const value = event.target.val();
			log.innerHTML = JSON.stringify(value) + '<hr />' + log.innerHTML;
		 });
		 
		 that.resetMainArray.addEventListener('click', function () {
			that.smartArray.reset();
			that.emptyMainArray.disabled = true;
		 });
		 
		 that.emptyMainArray.addEventListener('click', function () {
			that.smartArray.emptyArray();
		 });
	}	
}