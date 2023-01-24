import { Component, ViewChild, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { ArrayComponent } from 'smart-webcomponents-angular/array';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('array', { read: ArrayComponent, static: false }) smartArray!: ArrayComponent;
	@ViewChild('checkbox', { read: CheckBoxComponent, static: false }) enableIndexDisplay!: CheckBoxComponent;
	@ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) enableVerticalScrollbar!: CheckBoxComponent;
	@ViewChild('checkbox3', { read: CheckBoxComponent, static: false }) enableHorizontalScrollbar!: CheckBoxComponent;
	@ViewChild('log', { read: ElementRef, static: false }) log!: ElementRef;
 
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
    
        that.smartArray.addEventListener('scroll', function (event: any) {
            that.log.nativeElement.innerHTML = event.detail.direction + ' scrollbar scrolled.<br />' + that.log.nativeElement.innerHTML;
        });
        
		that.enableIndexDisplay.addEventListener('change', function (event: any) {
            that.smartArray.showIndexDisplay = event.detail.value;
        });
		
        that.enableVerticalScrollbar.addEventListener('change', function (event: any) {
            that.smartArray.showVerticalScrollbar = event.detail.value;
        });
		
        that.enableHorizontalScrollbar.addEventListener('change', function (event: any) {
            that.smartArray.showHorizontalScrollbar = event.detail.value;
        });
	}	
}