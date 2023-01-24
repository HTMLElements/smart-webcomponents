import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { WindowComponent } from 'smart-webcomponents-angular/window';
import { EditorComponent } from 'smart-webcomponents-angular/editor';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})


export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('window', { read: WindowComponent, static: false }) window!: WindowComponent;
	@ViewChild('editor', { read: EditorComponent, static: false }) editor!: EditorComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
		this.window.open();
    };	

	handleClick() {
		const popupWindow = this.window;

		popupWindow.opened ? popupWindow.close() : popupWindow.open();
	}
}