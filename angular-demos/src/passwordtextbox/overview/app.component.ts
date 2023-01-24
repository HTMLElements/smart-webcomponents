import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { PasswordTextBoxComponent } from 'smart-webcomponents-angular/passwordtextbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('passwordtextbox', { read: PasswordTextBoxComponent, static: false }) passwordtextbox!: PasswordTextBoxComponent;
	@ViewChild('passwordtextbox2', { read: PasswordTextBoxComponent, static: false }) passwordtextbox2!: PasswordTextBoxComponent;
	
 
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