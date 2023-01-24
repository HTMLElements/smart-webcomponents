import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { SplitterComponent } from 'smart-webcomponents-angular/splitter';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
	@ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
	@ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
	@ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
	@ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
	@ViewChild('button7', { read: ButtonComponent, static: false }) button7!: ButtonComponent;
	@ViewChild('button8', { read: ButtonComponent, static: false }) button8!: ButtonComponent;
	@ViewChild('button9', { read: ButtonComponent, static: false }) button9!: ButtonComponent;
	@ViewChild('button10', { read: ButtonComponent, static: false }) button10!: ButtonComponent;
	@ViewChild('button11', { read: ButtonComponent, static: false }) button11!: ButtonComponent;
	@ViewChild('splitter', { read: SplitterComponent, static: false }) splitter!: SplitterComponent;

	collapse(event:any):void {
		this.splitter.update(0, { size: 70 });
		this.splitter.nativeElement.removeAttribute('expanded');
	}

	expand(event:any):void {
		this.splitter.update(0, { size: 240 });
		this.splitter.nativeElement.setAttribute('expanded', '');
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

		this.splitter.hideBar(0);
	}
}