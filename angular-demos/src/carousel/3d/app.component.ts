import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CarouselComponent } from 'smart-webcomponents-angular/carousel';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('carousel', { read: CarouselComponent, static: false }) carousel!: CarouselComponent;
	@ViewChild('carousel2', { read: CarouselComponent, static: false }) carousel2: CarouselComponent;


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
			basePath = './../../../src/images/';

		that.carousel.dataSource = generateDataSource(7);
		that.carousel2.dataSource = generateDataSource(7);
		function generateDataSource(items: number) {
			let dataSource = Array(items).fill({});
			dataSource.forEach((element, index) => dataSource[index] = { image: `${basePath}carousel-square-${index + 1}.jpg` });
			return dataSource;
		}
	}
}