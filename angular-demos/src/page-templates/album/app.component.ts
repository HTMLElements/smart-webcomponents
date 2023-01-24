import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CardComponent, Card } from 'smart-webcomponents-angular/card';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('album', { read: ElementRef, static: false }) album: ElementRef;


	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
	}

	init(): void {
		// init code.
		"use strict";


		const album: HTMLDivElement = this.album.nativeElement,
			fragment: DocumentFragment = document.createDocumentFragment(),
			items: number = 12;

		for (let i = 0; i < items; i++) {
			const card: Card = document.createElement('smart-card');

			card.itemTemplate = 'cardTemplate';
			fragment.appendChild(card);
		}

		album.appendChild(fragment);
	}
}