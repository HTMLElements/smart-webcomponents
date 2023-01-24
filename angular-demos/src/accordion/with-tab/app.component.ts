import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { AccordionComponent } from 'smart-webcomponents-angular/accordion';
import { TabsComponent } from 'smart-webcomponents-angular/tabs';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('accordion', { read: AccordionComponent, static: false }) accordion!: AccordionComponent;
	@ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;
	@ViewChild('tabs2', { read: TabsComponent, static: false }) tabs2!: TabsComponent;
	@ViewChild('tabs3', { read: TabsComponent, static: false }) tabs3!: TabsComponent;
	@ViewChild('tabs4', { read: TabsComponent, static: false }) tabs4!: TabsComponent;
	
 
	ngAfterViewInit(): void {
		// afterViewInit code.
    	this.init();
	}
	
	ngOnInit(): void {
		// onInit code.
	}
	
	init(): void {
		// init code.
	}	
}