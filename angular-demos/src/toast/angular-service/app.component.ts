import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ToastComponent } from 'smart-webcomponents-angular/toast';

import { ToastService } from './toast.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('toast', { read: ToastComponent, static: false }) toast!: ToastComponent;

	constructor(private toastService: ToastService) {
	}

	open: Function = (event: CustomEvent): void => {
		this.toastService.openToast(`Toast ${document.body.querySelectorAll('smart-toast-item').length + 1}`);
	}

	closeLast: Function = (event: CustomEvent): void => {
		this.toastService.closeToastLast();
	}

	closeAll: Function = (event: CustomEvent): void => {
		this.toastService.closeToastAll();
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

		const that = this;

		//Sets the ToastComponent for the service
		that.toastService.setToast(that.toast);
	}
}