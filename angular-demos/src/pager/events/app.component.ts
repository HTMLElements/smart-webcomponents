import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { PagerComponent } from 'smart-webcomponents-angular/pager';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('pager', { read: PagerComponent, static: false }) pager!: PagerComponent;
	@ViewChild('eventLog', { read: ElementRef, static: false }) eventLog!: ElementRef;

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

		that.pager.addEventListener('change', function (event: CustomEvent) {
			const details = event.detail;
			that.eventLog.nativeElement.innerHTML = 'Selected item #' + details.index;
			console.log('Selected item #' + details.index);
		});
	}
}