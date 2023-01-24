import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { MapComponent } from 'smart-webcomponents-angular/map';
import { MenuComponent } from 'smart-webcomponents-angular/menu';


@Component({
	selector: 'app-root',
	styleUrls: ['./app.component.css'],
	templateUrl: './app.component.html',
	encapsulation : ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('map', { read:  MapComponent, static: false }) map:  MapComponent;	
	@ViewChild('menu',{read:MenuComponent,  static:false }) menu: MenuComponent;
	query: String = 'la'; 
	apiKey: String = '';
	mapType: String = 'roadmap';
	minimizeWidth : Number = 4600;
	minimizable : Boolean = true;
 
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