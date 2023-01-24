import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TableComponent, TableColumn } from 'smart-webcomponents-angular/table';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;
	@ViewChild('table2', { read: TableComponent, static: false }) table2: TableComponent;
    
    shareData = [{
		code: 'AAC',
		company: 'AUSTRALIAN AGRICULTURAL COMPANY LIMITED.',
		price: 1.38,
		change: -0.01,
		changePercentage: -0.36,
		open: 1.39,
		high: 1.39,
		low: 1.38,
		volume: 9395
	},
	{
		code: 'AAD',
		company: 'ARDENT LEISURE GROUP',
		price: 1.15,
		change: 0.02,
		changePercentage: 1.32,
		open: 1.14,
		high: 1.15,
		low: 1.13,
		volume: 56431
	},
	{
		code: 'AAX',
		company: 'AUSENCO LIMITED',
		price: 4,
		change: -0.04,
		changePercentage: -0.99,
		open: 4.01,
		high: 4.05,
		low: 4,
		volume: 90641
	},
	{
		code: 'ABC',
		company: 'ADELAIDE BRIGHTON LIMITED',
		price: 3,
		change: 0.06,
		changePercentage: 2.04,
		open: 2.98,
		high: 3,
		low: 2.96,
		volume: 862518
	},
	{
		code: 'ABP',
		company: 'ABACUS PROPERTY GROUP',
		price: 1.91,
		change: 0,
		changePercentage: 0,
		open: 1.91,
		high: 1.93,
		low: 1.9,
		volume: 595701
	},
	{
		code: 'ABY',
		company: 'ADITYA BIRLA MINERALS LIMITED',
		price: 0.77,
		change: 0.02,
		changePercentage: 2,
		open: 0.76,
		high: 0.77,
		low: 0.76,
		volume: 54567
	},
	{
		code: 'ACR',
		company: 'ACRUX LIMITED',
		price: 3.71,
		change: 0.01,
		changePercentage: 0.14,
		open: 3.7,
		high: 3.72,
		low: 3.68,
		volume: 191373
	},
	{
		code: 'ADU',
		company: 'ADAMUS RESOURCES LIMITED',
		price: 0.72,
		change: 0,
		changePercentage: 0,
		open: 0.73,
		high: 0.74,
		low: 0.72,
		volume: 8602291
	},
	{
		code: 'AGG',
		company: 'ANGLOGOLD ASHANTI LIMITED',
		price: 7.81,
		change: -0.22,
		changePercentage: -2.74,
		open: 7.82,
		high: 7.82,
		low: 7.81,
		volume: 148
	},
	{
		code: 'AGK',
		company: 'AGL ENERGY LIMITED',
		price: 13.82,
		change: 0.02,
		changePercentage: 0.14,
		open: 13.83,
		high: 13.83,
		low: 13.67,
		volume: 846403
	},
	{
		code: 'AGO',
		company: 'ATLAS IRON LIMITED',
		price: 3.17,
		change: -0.02,
		changePercentage: -0.47,
		open: 3.11,
		high: 3.22,
		low: 3.10,
		volume: 5416303
	}];

	dataSource = new window.Smart.DataAdapter({
		dataSource: this.shareData,
		dataFields: [
			'code: string',
			'company: string',
			'price: number',
			'change: number',
			'changePercentage: number',
			'open: number',
			'high: number',
			'low: number',
			'volume: number'
		]
	});

	columns = [{
		label: 'Code',
		dataField: 'code',
		dataType: 'string',
		width: 100,
		responsivePriority: 1
	},
	{
		label: 'Company',
		dataField: 'company',
		dataType: 'string',
		width: 400,
		responsivePriority: 4
	},
	{
		label: 'Price',
		dataField: 'price',
		dataType: 'number',
		formatFunction(settings: any) {
			settings.template = '$' + settings.value.toFixed(2);
		},
		responsivePriority: 1
	},
	{
		label: 'Change',
		dataField: 'change',
		dataType: 'number',
		formatFunction(settings: any) {
			settings.template = (settings.value > 0 ? '+' : '') + settings.value.toFixed(2);
		},
		responsivePriority: 2
	},
	{
		label: 'Change %',
		dataField: 'changePercentage',
		dataType: 'number',
		formatFunction(settings: any) {
			settings.template = (settings.value > 0 ? '+' : '') + settings.value.toFixed(2) + '%';
		},
		responsivePriority: 1
	},
	{
		label: 'Open',
		dataField: 'open',
		dataType: 'number',
		formatFunction(settings: any) {
			settings.template = '$' + settings.value.toFixed(2);
		},
		responsivePriority: 1
	},
	{
		label: 'High',
		dataField: 'high',
		dataType: 'number',
		formatFunction(settings: any) {
			settings.template = '$' + settings.value.toFixed(2);
		},
		responsivePriority: 2
	},
	{
		label: 'Low',
		dataField: 'low',
		dataType: 'number',
		formatFunction(settings: any) {
			settings.template = '$' + settings.value.toFixed(2);
		},
		responsivePriority: 2
	},
	{
		label: 'Volume',
		dataField: 'volume',
		dataType: 'number',
		formatFunction(settings: any) {
			settings.template = settings.value + '';
		},
		responsivePriority: 1
	}];
 
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