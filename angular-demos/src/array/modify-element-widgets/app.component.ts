import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ArrayComponent } from 'smart-webcomponents-angular/array';
import { ButtonComponent } from 'smart-webcomponents-angular/button';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('smartArray', { read: ArrayComponent, static: false }) smartArray!: ArrayComponent;
	@ViewChild('hideSpinButtons', { read: ButtonComponent, static: false }) hideSpinButtons!: ButtonComponent;
	@ViewChild('changePrecisionDigits', { read: ButtonComponent, static: false }) changePrecisionDigits!: ButtonComponent;
	@ViewChild('changeElementWidth', { read: ButtonComponent, static: false }) changeElementWidth!: ButtonComponent;
	@ViewChild('changeElementHeight', { read: ButtonComponent, static: false }) changeElementHeight!: ButtonComponent;

 
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
    
        that.hideSpinButtons.addEventListener('click', function () {
            that.smartArray.elementTemplate = function (element, dimensions) {
                element.spinButtons = false;
            };
        });
		
        that.changePrecisionDigits.addEventListener('click', function () {
            that.smartArray.elementTemplate = function (element, dimensions) {
                element.precisionDigits = 3;
            };
        });
		
        that.changeElementWidth.addEventListener('click', function () {
            that.smartArray.setColumnWidth(150);
        });
		
        that.changeElementHeight.addEventListener('click', function () {
            that.smartArray.setRowHeight(50);
        });
	}	
}