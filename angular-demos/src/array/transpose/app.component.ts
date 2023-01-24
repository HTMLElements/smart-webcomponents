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
	@ViewChild('transposeArray', { read: ButtonComponent, static: false }) transposeArray!: ButtonComponent;
	 
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
    
        that.transposeArray.addEventListener('click', function () {
            that.smartArray.transposeArray();
        });
    

	}	
}