import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CardComponent } from 'smart-webcomponents-angular/card';
import { PagerComponent } from 'smart-webcomponents-angular/pager';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('charts', { read: CardComponent, static: false }) charts!: CardComponent;
	@ViewChild('marketing', { read: CardComponent, static: false }) marketing!: CardComponent;
	@ViewChild('conversion', { read: CardComponent, static: false }) conversion!: CardComponent;
	@ViewChild('impressions', { read: CardComponent, static: false }) impressions!: CardComponent;
	@ViewChild('sales', { read: CardComponent, static: false }) sales!: CardComponent;
	@ViewChild('design', { read: CardComponent, static: false }) design!: CardComponent;
	@ViewChild('clicks', { read: CardComponent, static: false }) clicks!: CardComponent;
	@ViewChild('pager', { read: PagerComponent, static: false }) pager!: PagerComponent;
	
 
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
        that.charts.dataSource = {
            title: 'Progress',
            image1: '../../../images/card-demo-chart-1.png',
            image2: '../../../images/card-demo-chart-2.png',
            image3: '../../../images/card-demo-chart-3.png'
        };
        that.charts.contentHandler = function (card) {
            const pager = card.querySelector('smart-pager'), slides = card.querySelectorAll('.slide');
            pager.addEventListener('change', function (event) {
                for (let i = 0; i < slides.length; i++) {
                    i === event.detail.index ? slides[i].classList.remove('hidden') : slides[i].classList.add('hidden');
                }
            });
        };
        that.marketing.dataSource = {
            title: 'Marketing',
            content: '123.4M'
        };
        that.conversion.dataSource = {
            title: 'Conversion',
            content: '537',
            percentage: '+22',
            image: '../../../images/card-demo-chart-4.png'
        };
        that.impressions.dataSource = {
            title: 'Impressions',
            content: '123.4M',
            percentage: '+12.3',
            image: '../../../images/card-demo-chart-5.png'
        };
        that.sales.dataSource = {
            title: 'Sales',
            content: '345.8M'
        };
        that.design.dataSource = {
            title: 'Design',
            content: '345.2M'
        };
        that.clicks.dataSource = {
            title: 'Clicks',
            content: '537'
        };
	}	
}