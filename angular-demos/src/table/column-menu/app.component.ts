import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TableComponent, TableColumn } from 'smart-webcomponents-angular/table';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;

	getOrderData() {
		const orderData = [], 
			productNames = ['Wireless Microphone System', 'One for the Blackbird, One for the Crow', 'Ultrean 6 Quart Air Fryer', 'NETGEAR WiFi Range Extender', 'YTD Men\'s Short Sleeve Polo Shirt', 'Sling Bag', 'Kantek Tablet Stand', 'Cuisinart C55CNS-8CFP', 'Panasonic Noise Cancelling Over The Ear Headphones', 'Magid GF18T Pesticide Glove', 'Ink+Ivy Alpine Cotton Duvet Cover', '12 Little Zoo Animals Toy Figure'], 
			productPrices = [47.59, 7.48, 64.59, 29.99, 28.99, 25.49, 17.03, 10.14, 136.88, 7.73, 71.33, 6.99],
			countries = ["Germany", "Italy", "United Kingdom", "USA", "Isreal", "India", "China"];
		for (let i = 0; i < 100000; i++) {
			const productIndex = Math.floor(Math.random() * productNames.length);
			const countryIndex = Math.floor(Math.random() * countries.length);
			const order = {
				id: i,
				productName: productNames[productIndex],
				price: productPrices[productIndex],
				quantity: Math.floor(Math.random() * 8) + 1,
				date: new Date((new Date()).getTime() - Math.floor(Math.random() * 9 + 1) * 86400000),
				country: countries[countryIndex],
				margin: Math.floor(Math.random() * 4) + 1,
				status: ['Received', 'Confirmed', 'Processing', 'Shipped', 'In transit', 'Delivered'][Math.floor(Math.random() * 6)],
				total: 0,
				profit: 0
			};
			order.total = parseFloat((order.price * order.quantity).toFixed(2));
			order.profit = parseFloat((((Math.floor(Math.random() * 30) + 9) / 100) * order.total).toFixed(2));
			orderData.push(order);
		}
		return orderData;
	}

	dataSource = new window.Smart.DataAdapter({
		dataSource: this.getOrderData(),
		dataFields: [
			'id: number',
			'productName: string',
			'price: number',
			'quantity: number',
			'total: number',
			'date: date',
			'country: string',
			'margin: number',
			'profit: number',
			'status: string'
		]
	});
	columnMenu: Boolean = true;
	filtering: Boolean = true;
	editing: Boolean = true;
	selection: Boolean = true;
	keyboardNavigation: Boolean = true;
	sortMode: string = 'one';
	columns: TableColumn[] = [{ label: 'id', dataField: 'id', dataType: 'number', allowEdit: false },
	{ label: 'Product Name', dataField: 'productName', dataType: 'string' },
	{ label: 'Price', dataField: 'price', dataType: 'number', templateElement: '<span>${{value}}</span>' },
	{ label: 'Quantity', dataField: 'quantity', dataType: 'number' },
	{ label: 'Total', dataField: 'total', dataType: 'number', templateElement: '<span>${{value}}</span>' },
	{ label: 'Date', dataField: 'date', dataType: 'date' },
	{
		label: 'Country', dataField: 'country', dataType: 'string', formatFunction(settings) {
			settings.template = '<img class="flag" style="width: 40px; height: 27px;" src="../../grid/live-update-countries/flags/' + settings.value + '.svg" />';
		}
	},
	{
		label: 'Margin', dataField: 'margin', dataType: 'number', templateElement: '<span>{{value}}%</span>'
	},
	{ label: 'Profit', dataField: 'profit', dataType: 'number', templateElement: '<span>${{value}}</span>' },
	{
		label: 'Status', dataField: 'status', dataType: 'string', formatFunction(settings) {
			if (settings.value === 'Delivered') {
				settings.cell.style.backgroundColor = '#B6D7A8';
			}
			else {
				settings.cell.style.backgroundColor = '';
			}
		}
	}
	];

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