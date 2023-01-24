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
	@ViewChild('selectElement', { read: ButtonComponent, static: false }) selectElement!: ButtonComponent;
	@ViewChild('startSelection', { read: ButtonComponent, static: false }) startSelection!: ButtonComponent;
	@ViewChild('endSelection', { read: ButtonComponent, static: false }) endSelection!: ButtonComponent;
	@ViewChild('selectAll', { read: ButtonComponent, static: false }) selectAll!: ButtonComponent;
	@ViewChild('clearSelection', { read: ButtonComponent, static: false }) clearSelection!: ButtonComponent;	
 
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
    	
        that.selectElement.addEventListener('click', function () {
            that.smartArray.selectElement(0, 0);
        });
		
        that.startSelection.addEventListener('click', function () {
            that.smartArray.startSelection(0, 0);
        });
		
        that.endSelection.addEventListener('click', function () {
            that.smartArray.endSelection(0, 1);
        });
        
		that.selectAll.addEventListener('click', function () {
            that.smartArray.selectAll();
        });
        
		that.clearSelection.addEventListener('click', function () {
            that.smartArray.clearSelection();
        });
	}	
}