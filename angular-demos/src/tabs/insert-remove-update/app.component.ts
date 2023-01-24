import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { TabsComponent } from 'smart-webcomponents-angular/tabs';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
	@ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
	@ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;
	@ViewChild('index', { read: ElementRef, static: false }) index: ElementRef;

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

		that.button.addEventListener('click', function () {
			that.tabs.insert(parseInt(that.index.nativeElement.value), { label: 'New TAB', content: 'New content' });
		});
		that.button2.addEventListener('click', function () {
			that.tabs.removeAt(parseInt(that.index.nativeElement.value));
		});
		that.button3.addEventListener('click', function () {
			that.tabs.update(parseInt(that.index.nativeElement.value), 'Updated TAB', 'Updated content');
		});
	}
}