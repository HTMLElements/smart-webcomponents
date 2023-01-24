import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TabsComponent } from 'smart-webcomponents-angular/tabs';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;
	@ViewChild('tabs2', { read: TabsComponent, static: false }) tabs2!: TabsComponent;
	@ViewChild('tabs3', { read: TabsComponent, static: false }) tabs3!: TabsComponent;
	@ViewChild('tabs4', { read: TabsComponent, static: false }) tabs4!: TabsComponent;
	@ViewChild('tabs5', { read: TabsComponent, static: false }) tabs5!: TabsComponent;
	@ViewChild('tabs6', { read: TabsComponent, static: false }) tabs6!: TabsComponent;
	@ViewChild('tabs7', { read: TabsComponent, static: false }) tabs7!: TabsComponent;
	@ViewChild('tabs8', { read: TabsComponent, static: false }) tabs8!: TabsComponent;
	@ViewChild('tabs9', { read: TabsComponent, static: false }) tabs9!: TabsComponent;
	@ViewChild('tabs10', { read: TabsComponent, static: false }) tabs10!: TabsComponent;
	@ViewChild('tabs11', { read: TabsComponent, static: false }) tabs11!: TabsComponent;
	@ViewChild('tabs12', { read: TabsComponent, static: false }) tabs12!: TabsComponent;
	@ViewChild('tabs13', { read: TabsComponent, static: false }) tabs13!: TabsComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    // your code here

	}	
}