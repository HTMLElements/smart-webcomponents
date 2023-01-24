import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GaugeComponent } from 'smart-webcomponents-angular/gauge';
import { SwitchButtonComponent } from 'smart-webcomponents-angular/switchbutton';
import { TabsComponent } from 'smart-webcomponents-angular/tabs';
import { TankComponent } from 'smart-webcomponents-angular/tank';
import { ListBoxComponent } from 'smart-webcomponents-angular/listbox';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('gauge', { read: GaugeComponent, static: false }) gauge: GaugeComponent;
	@ViewChild('switchbutton', { read: SwitchButtonComponent, static: false }) switchbutton!: SwitchButtonComponent;
	@ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;
	@ViewChild('tank', { read: TankComponent, static: false }) tank!: TankComponent;
	@ViewChild('listbox', { read: ListBoxComponent, static: false }) listbox!: ListBoxComponent;


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