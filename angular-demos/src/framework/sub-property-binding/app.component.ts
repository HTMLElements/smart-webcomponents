import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MultilineTextBoxComponent } from 'smart-webcomponents-angular/multilinetextbox';
import { TextBoxComponent } from 'smart-webcomponents-angular/textbox';
import { App } from 'smart-webcomponents-angular/source/smart.core';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('multilinetextbox', { read: MultilineTextBoxComponent, static: false }) multilinetextbox!: MultilineTextBoxComponent;
	@ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox!: TextBoxComponent;

	app = new App({
		data: {
			details: {
				subject: "About Transaction",
				message: "Hey, Peter. Take a look at the items, I sent you earlier."
			}
		}
	});

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