import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { PasswordTextBoxComponent } from 'smart-webcomponents-angular/passwordtextbox';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('passwordtextbox', { read: PasswordTextBoxComponent, static: false }) passwordtextbox!: PasswordTextBoxComponent;
	@ViewChild('eventLog', { read: ElementRef, static: false }) eventLog: ElementRef;


	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
	}

	init(): void {
		// init code.
		const that = this;

		that.passwordtextbox.addEventListener('change', function (event: CustomEvent) {
			that.eventLog.nativeElement.innerHTML = that.passwordtextbox.value;
		});
		
		that.passwordtextbox.addEventListener('keyup', function (event: CustomEvent) {
			that.eventLog.nativeElement.innerHTML = 'Keyup: ' + that.passwordtextbox.value;
		});
	}
}