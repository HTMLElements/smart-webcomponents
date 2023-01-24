import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { MapComponent } from 'smart-webcomponents-angular/map';
import { WindowComponent } from 'smart-webcomponents-angular/window';
import { ButtonComponent } from 'smart-webcomponents-angular/button';


@Component({
	selector: 'app-root',
	styleUrls: ['./app.component.css'],
	templateUrl: './app.component.html',
	encapsulation : ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('map', { read:  MapComponent, static: false }) map!:  MapComponent;
	@ViewChild('window', { read: WindowComponent, static: false }) window!: WindowComponent;
	@ViewChild('window2', { read: WindowComponent, static: false }) window2: WindowComponent;
	@ViewChild('window3', { read: WindowComponent, static: false }) window3: WindowComponent;

	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;

	queryFirstMap: String = 'la'; 
	apiKey: String = '';
	mapTypeFirstMap: String = 'roadmap';
	querySecondMap: String  = 'mit';
	mapTypeSecondMap : String =  'satellite';
	queryThirdMap: String  = 'Sofia,Bulagaria,NDK';
	mapTypeThirdMap : String =  'roadmap';
	labelFirst: String = 'Regular map';
	labelSecond: String = 'Satellite map';
	labelThird: String = 'Custom map';
	
	openModalWindowRegular(event:any):void{
	
		this.window.opened ? this.window.close(): this.window.open()
	}
	openModalWindowSatellite(event:any):void{
		this.window2.opened ? this.window2.close(): this.window2.open()
	}
	openModalWindowCustom(event:any):void{
		this.window3.opened ? this.window3.close(): this.window3.open()
	}
	handleCloseMapWindow(event:any):void{
	
		if(event.target.closest('.closeRegularMap')){
			this.window.close()
		}
		if(event.target.closest('.closeSatelliteMap')){
			this.window2.close()
		}
		if(event.target.closest('.closeCustomMap')){
			this.window3.close()
		}
	
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