import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GaugeComponent } from 'smart-webcomponents-angular/gauge';
import { PowerButtonComponent, PowerButton } from 'smart-webcomponents-angular/powerbutton';
import { WindowComponent } from 'smart-webcomponents-angular/window';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('gauge', { read: GaugeComponent, static: false }) gauge: GaugeComponent;
	@ViewChild('powerbutton', { read: PowerButtonComponent, static: false }) powerbutton: PowerButtonComponent;
	@ViewChild('window', { read: WindowComponent, static: false }) smartWindow!: WindowComponent;

	onReady(event: any) {
		this.smartWindow.nativeElement.querySelector('#power').addEventListener('click', function (): void {
			this.gauge.disabled = !(<PowerButton>this).checked;
		});
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

		const that = this,
			smartWindow = that.smartWindow,
			gauge = that.gauge;

		gauge.addEventListener('change', function (event: CustomEvent): void {
			smartWindow.nativeElement.querySelector('#value').textContent = event.detail.value;
		});
	}
}