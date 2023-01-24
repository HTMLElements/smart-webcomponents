import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ListMenuComponent } from 'smart-webcomponents-angular/listmenu';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('listmenu', { read: ListMenuComponent, static: false }) listmenu!: ListMenuComponent;
	
 
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