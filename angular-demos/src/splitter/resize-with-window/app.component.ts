import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { WindowComponent } from 'smart-webcomponents-angular/window';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('window', { read: WindowComponent, static: false }) dialogWindow: WindowComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
		
		setTimeout(()=> {
			this.dialogWindow.opened = true;
		}, 3000);
		
    }
		
	init(): void {
		// init code.
	    

	}	
}