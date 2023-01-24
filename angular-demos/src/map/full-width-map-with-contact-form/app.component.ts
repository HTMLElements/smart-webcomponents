import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { MapComponent } from 'smart-webcomponents-angular/map';
import { InputComponent} from 'smart-webcomponents-angular/input';


@Component({
	selector: 'app-root',
	styleUrls: ['./app.component.css'],
	templateUrl: './app.component.html',
	encapsulation : ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('map', { read:  MapComponent, static: false }) map:  MapComponent;	
	@ViewChild('input', { read: InputComponent, static: false }) input:  InputComponent;	

	query: String = 'miami'; 
	apiKey: String = '';
	mapType: String = 'roadmap';
	placeholderForName: String = 'Your name';
	placeholderForEmail : String = 'Your email';
	placeholderForSubject : String  = 'Subject';
	
 
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