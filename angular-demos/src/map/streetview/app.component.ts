import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { MapComponent } from 'smart-webcomponents-angular/map';
import { WindowComponent } from 'smart-webcomponents-angular/window';


@Component({
	selector: 'app-root',
	styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',

})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('map', { read:  MapComponent, static: false }) map!:  MapComponent;
	@ViewChild('window', { read:   WindowComponent, static: false }) smartWindow!: WindowComponent;

	query: String = 'rila, seven rila lakes'; 
	mode: String = 'streetview';
	apiKey: String = '';
	heading: String = '60';
	pitch: String = '0';
	
	openModalWindow(event:any):void{
		const smartWindow = this.smartWindow;
		smartWindow.opened ? smartWindow.close() : smartWindow.open();
		console.log(event.target)
	}
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    

	}	
}