import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CarouselComponent } from 'smart-webcomponents-angular/carousel';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('carousel', { read: CarouselComponent, static: false }) carousel!: CarouselComponent;
	@ViewChild('carousel2', { read: CarouselComponent, static: false }) carousel2!: CarouselComponent;
	@ViewChild('carousel3', { read: CarouselComponent, static: false }) carousel3!: CarouselComponent;
	@ViewChild('carousel4', { read: CarouselComponent, static: false }) carousel4!: CarouselComponent;
	@ViewChild('carousel5', { read: CarouselComponent, static: false }) carousel5!: CarouselComponent;
	@ViewChild('carousel6', { read: CarouselComponent, static: false }) carousel6!: CarouselComponent;


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
			basePath = './../../../src/images/',
			carousels = [that.carousel, that.carousel2, that.carousel3, that.carousel4, that.carousel5, that.carousel6];

		function generateDataSource(items) {
			let dataSource = [];
			for (let i = 0; i < items; i++) {
				const item = { image: `${basePath}carousel-square-${i + 1}.jpg` };
				dataSource.push(item);
			}
			return dataSource;
		}
		for (let i = 0; i < carousels.length; i++) {
			carousels[i].dataSource = generateDataSource(6);
		}
	}
}