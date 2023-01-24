import React from "react";
import ReactDOM from "react-dom";
import { Accordion, AccordionItem } from 'smart-webcomponents-react/accordion';
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Card } from 'smart-webcomponents-react/card';
import { DateTimePicker } from 'smart-webcomponents-react/datetimepicker';
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { Input } from 'smart-webcomponents-react/input';
import { NumericTextBox } from 'smart-webcomponents-react/numerictextbox';
import { PasswordTextBox } from 'smart-webcomponents-react/passwordtextbox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Tabs, TabItem, TabItemsGroup } from 'smart-webcomponents-react/tabs';
import { Grid, Smart } from 'smart-webcomponents-react/grid';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.rowseparator = React.createRef();
		this.accordion = React.createRef();
	}

	loadGrid(e) {
		const gridTabId = (typeof e === 'number') ? e : e.detail.index;

		if (gridTabId === 0) {
			this.loadGridOffers();
		}
		else if (gridTabId === 1) {
			this.loadGridRegular();
		}
		else if (gridTabId === 2) {
			this.loadGridInfo();
		}
	}

	loadGridOffers() {
		if (document.getElementById('offersGrid') instanceof Smart.Grid) {
			return;
		}

		const properties = {
			sorting: {
				enabled: true
			},
			layout: {
				rowHeight: 50
			},
			dataSource: new Smart.DataAdapter({
				dataSource: [{
					direction: 'Warsaw PL - Minsk International 2 BY',
					date: '20 January 2020',
					time: '19:22 <i className="material-icons right-time-arrow">keyboard_arrow_right</i> 22:36',
					price: '$311.00',
					save: '$30.00',
					tickets: '21',
					status: 'Open',
				},
				{
					direction: 'Vilnius LT - Kiev Zhulhany UA',
					date: '25 January 2020',
					time: '00:47 <i className="material-icons right-time-arrow">keyboard_arrow_right</i> 03:02',
					price: '$220.00',
					save: '$86.00',
					tickets: '61',
					status: 'Open',
				},
				{
					direction: 'Tallin EE - Berlin Tegel DE',
					date: '29 January 2020',
					time: '19:47 <i className="material-icons right-time-arrow">keyboard_arrow_right</i> 22:02',
					price: '$90.00',
					save: '$12.00',
					tickets: '34',
					status: 'Open',
				},
				{
					direction: 'St. Petersburg Pulkovo - Tallin Estonia',
					date: '30 January 2020',
					time: '09:12 <i className="material-icons right-time-arrow">keyboard_arrow_right</i> 12:26',
					price: '$450.00',
					save: '$214.00',
					tickets: '74',
					status: 'Last deals',
				},
				{
					direction: 'St. Petersburg Pulkovo - Tallin Estonia',
					date: '19 January 2020',
					time: '07:15 <i className="material-icons right-time-arrow">keyboard_arrow_right</i> 10:29',
					price: '$450.00',
					save: '$132.00',
					tickets: '94',
					status: 'Available soon',
				},
				{
					direction: 'Prague CZ - St. Petersburg Pulkovo',
					date: '13 January 2020',
					time: '00:55 <i className="material-icons right-time-arrow">keyboard_arrow_right</i> 03:10',
					price: '$140.00',
					save: '$89.00',
					tickets: '67',
					status: 'Last deals',
				},
				{
					direction: 'Prague CZ - St. Petersburg Pulkovo',
					date: '17 January 2020',
					time: '01:14 <i className="material-icons right-time-arrow">keyboard_arrow_right</i> 15:42',
					price: '$256.00',
					save: '$87.00',
					tickets: '59',
					status: 'Last deals',
				},
				{
					direction: 'Moscow Sheremetyevo RU - Vilnius LT',
					date: '11 January 2020',
					time: '01:14 <i className="material-icons right-time-arrow">keyboard_arrow_right</i> 04:28',
					price: '$225.00',
					save: '$102.00',
					tickets: '6',
					status: 'Open',
				},
				{
					direction: 'Minsk International 2 BY - Berlin Schoenefeld DE',
					date: '12 January 2020',
					time: '11:22 <i className="material-icons right-time-arrow">keyboard_arrow_right</i> 14:36',
					price: '$113.00',
					save: '$32.00',
					tickets: '47',
					status: 'Open',
				},
				{
					direction: 'Kiev Zhulhany UA - Moscow Vnukovo RU',
					date: '05 January 2020',
					time: '17:11 <i className="material-icons right-time-arrow">keyboard_arrow_right</i> 20:21',
					price: '$46.00',
					save: '$11.00',
					tickets: '66',
					status: 'Open',
				},
				{
					direction: 'Tallin EE - Berlin Tegel DE',
					date: '10 January 2020',
					time: '4:35 <i className="material-icons right-time-arrow">keyboard_arrow_right</i> 17:49',
					price: '$378.00',
					save: '$35.00',
					tickets: '25',
					status: 'Open',
				},
				{
					direction: 'Moscow Vnukovo RU - Kiev Borispol UA',
					date: '11 January 2020',
					time: '07:15 <i className="material-icons right-time-arrow">keyboard_arrow_right</i> 10:29',
					price: '$90.00',
					save: '$82.00',
					tickets: '11',
					status: 'Open',
				},
				{
					direction: 'Riga International LV - Warsaw Modlin',
					date: '12 January 2020',
					time: '17:49 <i className="material-icons right-time-arrow">keyboard_arrow_right</i> 20:04',
					price: '$220.00',
					save: '$30.00',
					tickets: '41',
					status: 'Open',
				},
				{
					direction: 'Vilnius LT - Kiev Zhulhany UA',
					date: '13 January 2020',
					time: '10:23 <i className="material-icons right-time-arrow">keyboard_arrow_right</i> 13:37',
					price: '$321.00',
					save: '$44.00',
					tickets: '32',
					status: 'Open',
				},
				{
					direction: 'Minsk International 2 BY - Berlin Schoenefeld DE',
					date: '13 January 2020',
					time: '20:10 <i className="material-icons right-time-arrow">keyboard_arrow_right</i> 23:24',
					price: '$256.00',
					save: '$32.00',
					tickets: '55',
					status: 'Available soon',
				},
				{
					direction: 'St. Petersburg Pulkovo - Tallin Estonia',
					date: '14 January 2020',
					time: '01:14 <i className="material-icons right-time-arrow">keyboard_arrow_right</i> 04:28',
					price: '$311.00',
					save: '$63.00',
					tickets: '15',
					status: 'Available soon',
				},
				{
					direction: 'Kiev Zhulhany UA - Moscow Vnukovo RU',
					date: '19 January 2020',
					time: '09:12 <i className="material-icons right-time-arrow">keyboard_arrow_right</i> 12:26',
					price: '$450.00',
					save: '$45.00',
					tickets: '21',
					status: 'Open',
				},
				{
					direction: 'Moscow Sheremetyevo RU - Vilnius LT',
					date: '18 January 2020',
					time: '06:08 <i className="material-icons right-time-arrow">keyboard_arrow_right</i> 09:22',
					price: '$160.00',
					save: '$65.00',
					tickets: '5',
					status: 'Open',
				},
				{
					direction: 'Warsaw PL - Minsk International 2 BY',
					date: '17 January 2020',
					time: '03:15 <i className="material-icons right-time-arrow">keyboard_arrow_right</i> 06:29',
					price: '$220.00',
					save: '$110.00',
					tickets: '2',
					status: 'Last deals',
				},
				{
					direction: 'Prague CZ - St. Petersburg Pulkovo',
					date: '16 January 2020',
					time: '19:47 <i className="material-icons right-time-arrow">keyboard_arrow_right</i> 22:02',
					price: '$140.00',
					save: '$40.00',
					tickets: '35',
					status: 'Last deals',
				},
				],
				dataFields: [
					'direction: string',
					'date: string',
					'time: string',
					'price: string',
					'save: string',
					'tickets: string',
					'status: string',
				]
			}),
			columns: [{
				label: 'Direction',
				dataField: 'direction',
				width: '40%'
			},
			{
				label: 'Date',
				dataField: 'date',
				width: '10%'
			},
			{
				label: 'Time',
				dataField: 'time',
				width: '10%',
				template: function (formatObject) {
					if (!formatObject.template) {
						formatObject.template = formatObject.value;
					}
				}
			},
			{
				label: 'Price',
				dataField: 'price',
				width: '10%'
			},
			{
				label: 'You save',
				dataField: 'save',
				width: '10%'
			},
			{
				label: 'Tickets',
				dataField: 'tickets',
				width: '10%'
			},
			{
				label: 'Status',
				dataField: 'status',
				width: '10%',
				template: function (formatObject) {
					if (!formatObject.template) {
						let statusClass = '';
						if (formatObject.value === 'Last deals') {
							statusClass = 'last-details-status';
						} else if (formatObject.value === 'Open') {
							statusClass = 'open-status';
						} else if (formatObject.value === 'Available soon') {
							statusClass = 'available-soon-status';
						}
						formatObject.template = '<span className="' + statusClass + '">' + formatObject.value + '</span>';
					}
				}
			},
			]
		};

		const gridContainer = document.getElementById('offersGrid');

		gridContainer.id = '';

		ReactDOM.render(<Grid id="offersGrid" {...properties}></Grid>, gridContainer);
	};

	loadGridRegular() {
		if (document.getElementById('regularGrid') instanceof Smart.Grid) {
			return;
		}

		const properties = {
			sorting: {
				enabled: true
			},
			layout: {
				rowHeight: 50
			},
			dataSource: new Smart.DataAdapter({
				dataSource: [{
					number: 'LET598',
					direction: 'Warsaw PL - Minsk International 2 BY',
					date: '20 January 2020',
					departs: '19:22',
					arrives: '22:36',
					status: 'Landed',
				},
				{
					number: 'ESP738',
					direction: 'Vilnius LT - Kiev Zhulhany UA',
					date: '25 January 2020',
					departs: '00:47',
					arrives: '03:02',
					status: 'On Time',
				},
				{
					number: 'LET598',
					direction: 'Tallin EE - Berlin Tegel DE',
					date: '29 January 2020',
					departs: '19:47',
					arrives: '22:02',
					status: 'Landed',
				},
				{
					number: 'DEU870',
					direction: 'St. Petersburg Pulkovo - Tallin Estonia',
					date: '30 January 2020',
					departs: '09:12',
					arrives: '12:26',
					status: 'Landed',
				},
				{
					number: 'DEU545',
					direction: 'St. Petersburg Pulkovo - Tallin Estonia',
					date: '19 January 2020',
					departs: '07:15',
					arrives: '10:29',
					status: 'On Time',
				},
				{
					number: 'EST679',
					direction: 'Prague CZ - St. Petersburg Pulkovo',
					date: '13 January 2020',
					departs: '00:55',
					arrives: '03:10',
					status: 'On Time',
				},
				{
					number: 'CZR219',
					direction: 'Prague CZ - St. Petersburg Pulkovo',
					date: '17 January 2020',
					departs: '01:14',
					arrives: '15:42',
					status: 'On Time',
				},
				{
					number: 'EST679',
					direction: 'Moscow Sheremetyevo RU - Vilnius LT',
					date: '11 January 2020',
					departs: '01:14',
					arrives: '04:28',
					status: 'On Time',
				},
				{
					number: 'ITA200',
					direction: 'Minsk International 2 BY - Berlin Schoenefeld DE',
					date: '12 January 2020',
					departs: '11:22',
					arrives: '14:36',
					status: 'On Time',
				},
				{
					number: 'RUS677',
					direction: 'Kiev Zhulhany UA - Moscow Vnukovo RU',
					date: '05 January 2020',
					departs: '17:11',
					arrives: '20:21',
					status: 'Landed',
				},
				{
					number: 'EST679',
					direction: 'Tallin EE - Berlin Tegel DE',
					date: '01 January 2020',
					departs: '09:12',
					arrives: '12:26',
					status: 'On Time',
				},
				{
					number: 'RUS677',
					direction: 'Moscow Vnukovo RU - Kiev Borispol UA',
					date: '07 January 2020',
					departs: '06:08',
					arrives: '09:22',
					status: 'Landed',
				},
				{
					number: 'LTV133',
					direction: 'Riga International LV - Warsaw Modlin',
					date: '03 January 2020',
					departs: '03:15',
					arrives: '06:29',
					status: 'Landed',
				},
				{
					number: 'LET598',
					direction: 'Vilnius LT - Kiev Zhulhany UA',
					date: '24 January 2020',
					departs: '19:47',
					arrives: '22:02',
					status: 'On Time',
				},
				{
					number: 'CZR219',
					direction: 'Minsk International 2 BY - Berlin Schoenefeld DE',
					date: '25 January 2020',
					departs: '14:35',
					arrives: '17:49',
					status: 'On Time',
				},
				{
					number: 'RUS184',
					direction: 'St. Petersburg Pulkovo - Tallin Estonia',
					date: '24 January 2020',
					departs: '07:15',
					arrives: '10:29',
					status: 'On Time',
				},
				{
					number: 'DEU545',
					direction: 'Kiev Zhulhany UA - Moscow Vnukovo RU',
					date: '14 January 2020',
					departs: '17:49',
					arrives: '20:04',
					status: 'Landed',
				},
				{
					number: 'ITA200',
					direction: 'Moscow Sheremetyevo RU - Vilnius LT',
					date: '16 January 2020',
					departs: '10:23',
					arrives: '13:37',
					status: 'On Time',
				},
				{
					number: 'ESP738',
					direction: 'Warsaw PL - Minsk International 2 BY',
					date: '18 January 2020',
					departs: '20:10',
					arrives: '23:24',
					status: 'Landed',
				},
				{
					number: 'ITA164',
					direction: 'Prague CZ - St. Petersburg Pulkovo',
					date: '31 January 2020',
					departs: '01:14',
					arrives: '04:28',
					status: 'Landed',
				}
				],
				dataFields: [
					'number: string',
					'direction: string',
					'date: string',
					'departs: string',
					'arrives: string',
					'status: string',
				]
			}),
			columns: [{
				label: 'Number',
				dataField: 'number',
				width: '10%'
			},
			{
				label: 'Direction',
				dataField: 'direction',
				width: '40%'
			},
			{
				label: 'Date',
				dataField: 'date',
				width: '15%'
			},
			{
				label: 'Departs',
				dataField: 'departs',
				width: '10%',
				template: function (formatObject) {
					if (!formatObject.template) {
						formatObject.template = formatObject.value;
					}
				}
			},
			{
				label: 'Arrives',
				dataField: 'arrives',
				width: '10%',
				template: function (formatObject) {
					if (!formatObject.template) {
						formatObject.template = formatObject.value;
					}
				}
			},
			{
				label: 'Comments',
				dataField: 'status',
				width: '15%',
				template: function (formatObject) {
					if (!formatObject.template) {
						let statusClass = '';
						if (formatObject.value === 'Landed') {
							statusClass = 'landed-status';
						} else if (formatObject.value === 'On Time') {
							statusClass = 'on-time-status';
						}
						formatObject.template = '<span className="' + statusClass + '">' + formatObject.value + '</span>';
					}
				}
			},
			]
		};

		const gridContainer = document.getElementById('regularGrid');

		gridContainer.id = '';

		ReactDOM.render(<Grid id="regularGrid" {...properties}></Grid>, gridContainer);
	};

	loadGridInfo() {
		if (document.getElementById('infoGrid') instanceof Smart.Grid) {
			return;
		}

		const properties = {
			sorting: {
				enabled: true
			},
			layout: {
				rowHeight: 50
			},
			dataSource: new Smart.DataAdapter({
				dataSource: [{
					number: 'LET598',
					from: 'Warsaw',
					to: 'Minsk',
					departs: '19:22',
					arrives: '22:36',
					status: 'Landed',
				},
				{
					number: 'ESP738',
					from: 'Vilnius',
					to: 'Kiev',
					departs: '00:47',
					arrives: '03:02',
					status: 'On Time',
				},
				{
					number: 'LET598',
					from: 'Tallin',
					to: 'Berlin',
					departs: '19:47',
					arrives: '22:02',
					status: 'Landed',
				},
				{
					number: 'DEU870',
					from: 'St. Petersburg',
					to: 'Tallin',
					departs: '09:12',
					arrives: '12:26',
					status: 'Landed',
				},
				{
					number: 'DEU545',
					from: 'St. Petersburg',
					to: 'Tallin',
					departs: '07:15',
					arrives: '10:29',
					status: 'On Time',
				},
				{
					number: 'EST679',
					from: 'Prague',
					to: 'St. Petersburg',
					departs: '00:55',
					arrives: '03:10',
					status: 'On Time',
				},
				{
					number: 'CZR219',
					from: 'Prague',
					to: 'St. Petersburg',
					departs: '01:14',
					arrives: '15:42',
					status: 'On Time',
				},
				{
					number: 'EST679',
					from: 'Moscow',
					to: 'Vilnius',
					departs: '01:14',
					arrives: '04:28',
					status: 'On Time',
				},
				{
					number: 'ITA200',
					from: 'Minsk',
					to: 'Berlin',
					departs: '11:22',
					arrives: '14:36',
					status: 'On Time',
				},
				{
					number: 'RUS677',
					from: 'Kiev',
					to: 'Moscow',
					departs: '17:11',
					arrives: '20:21',
					status: 'Landed',
				},
				{
					number: 'EST679',
					from: 'Tallin',
					to: 'Berlin',
					departs: '19:27',
					arrives: '22:36',
					status: 'Landed',
				},
				{
					number: 'RUS677',
					from: 'Moscow',
					to: 'Vilnius',
					departs: '10:44',
					arrives: '23:01',
					status: 'On Time',
				},
				{
					number: 'LTV133',
					from: 'Riga',
					to: 'Warsaw',
					departs: '19:40',
					arrives: '22:01',
					status: 'Landed',
				},
				{
					number: 'LET598',
					from: 'Vilnius',
					to: 'Kiev',
					departs: '19:15',
					arrives: '22:22',
					status: 'Landed',
				},
				{
					number: 'CZR219',
					from: 'Prague',
					to: 'St. Petersburg',
					departs: '17:12',
					arrives: '20:28',
					status: 'On Time',
				},
				{
					number: 'RUS184',
					from: 'Moscow',
					to: 'Vilnius',
					departs: '20:23',
					arrives: '23:63',
					status: 'On Time',
				},
				{
					number: 'DEU545',
					from: 'Minsk',
					to: 'Berlin',
					departs: '22:12',
					arrives: '23:42',
					status: 'On Time',
				},
				{
					number: 'ITA200',
					from: 'Warsaw',
					to: 'Minsk',
					departs: '11:10',
					arrives: '20:28',
					status: 'On Time',
				},
				{
					number: 'ESP738',
					from: 'Vilnius',
					to: 'Kiev',
					departs: '11:25',
					arrives: '23:36',
					status: 'On Time',
				},
				{
					number: 'ITA164',
					from: 'Milan',
					to: 'Frankfurt',
					departs: '17:17',
					arrives: '20:21',
					status: 'Landed',
				},
				],
				dataFields: [
					'number: string',
					'from: string',
					'to: string',
					'departs: string',
					'arrives: string',
					'price: string',
					'save: string',
					'tickets: string',
					'status: string',
				]
			}),
			columns: [{
				label: 'Flight No.',
				dataField: 'number',
				width: '15%'
			},
			{
				label: 'From',
				dataField: 'from',
				width: '20%'
			},
			{
				label: 'To',
				dataField: 'to',
				width: '20%'
			},
			{
				label: 'Departs',
				dataField: 'departs',
				width: '15%',
				template: function (formatObject) {
					if (!formatObject.template) {
						formatObject.template = formatObject.value;
					}
				}
			},
			{
				label: 'Arrives',
				dataField: 'arrives',
				width: '15%',
				template: function (formatObject) {
					if (!formatObject.template) {
						formatObject.template = formatObject.value;
					}
				}
			},
			{
				label: 'Status',
				dataField: 'status',
				width: '15%',
				template: function (formatObject) {
					if (!formatObject.template) {
						let statusClass = '';
						if (formatObject.value === 'Landed') {
							statusClass = 'landed-status';
						} else if (formatObject.value === 'On Time') {
							statusClass = 'on-time-status';
						}
						formatObject.template = '<span className="' + statusClass + '">' + formatObject.value + '</span>';
					}
				}
			},
			]
		};

		const gridContainer = document.getElementById('infoGrid');

		gridContainer.id = '';

		ReactDOM.render(<Grid id="infoGrid" {...properties}></Grid>, gridContainer);
	}

	flightTripType(isReturn, e) {
		const returnCalendarContainer = this.rowseparator.current;

		if (isReturn && (returnCalendarContainer.classList.contains('smart-hidden'))) {
			returnCalendarContainer.classList.remove('smart-hidden');
		}
		else {
			returnCalendarContainer.classList.add('smart-hidden');
		}
	};

	loadAccordion(e) {
		if (e.detail.content) {
			return;
		}

		const item = this.accordion.current.nativeElement.querySelectorAll('smart-accordion-item')[e.detail.index];

		requestAnimationFrame(() => {
			const accordionItem = document.getElementById(item.id.replace("Item", ""));

			item.content.appendChild(accordionItem.content);
		});
	};

	init() {
		this.loadGrid(0); //Load first grid

		const template = document.createElement('template');

		template.id = 'hotels';
		template.innerHTML = `
				<div className="row-separator">
				<label>Where</label>
				<div className="filter-content">
					<smart-input></smart-input>
				</div>
			</div>
			<div className="row-separator">
				<label>Check In</label>
				<div className="filter-content">
					<smart-date-time-picker calendar-button enable-mouse-wheel-action
						drop-down-position="center-bottom" spin-buttons spin-buttons-position="left"
						drop-down-display-mode="calendar" drop-down-append-to="body" format-string="dd MMM yyyy"></smart-date-time-picker>
				</div>
			</div>
			<div className="row-separator">
				<label>Check Out</label>
				<div className="filter-content">
					<smart-date-time-picker calendar-button enable-mouse-wheel-action
						drop-down-position="center-bottom" spin-buttons spin-buttons-position="left"
						drop-down-display-mode="calendar" drop-down-append-to="body" format-string="dd MMM yyyy"></smart-date-time-picker>
				</div>
			</div>
			<smart-button  className="search-now-btn">Search</smart-button>	`;

		document.body.appendChild(template);

		const template2 = document.createElement('template');

		template2.id = 'cars';
		template2.innerHTML = `
				<div className="row-separator">
							<label>Where</label>
							<div className="filter-content">
								<smart-input></smart-input>
							</div>
						</div>
						<div className="row-separator">
							<label>Pick up car</label>
							<div className="filter-content">
								<div className="smart-grid-layout centered">
									<div className="row">
										<div className="col-md-6">
											<smart-date-time-picker calendar-button enable-mouse-wheel-action
												drop-down-position="center-bottom" spin-buttons spin-buttons-position="left"
												drop-down-display-mode="calendar" drop-down-append-to="body" format-string="dd MMM yyyy"></smart-date-time-picker>
										</div>
										<div className="col-md-3">
											<smart-drop-down-list drop-down-append-to="body" data-source='["00","01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23]'
												selected-values='["07"]'></smart-drop-down-list>
										</div>
										<div className="col-md-3">
											<smart-drop-down-list drop-down-append-to="body" data-source='["00", 15, 30, 45]'></smart-drop-down-list>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row-separator">
							<label>Return car</label>
							<div className="filter-content">
								<div className="smart-grid-layout centered">
									<div className="row">
										<div className="col-md-6">
											<smart-date-time-picker calendar-button enable-mouse-wheel-action
												drop-down-position="center-bottom" spin-buttons spin-buttons-position="left"
												drop-down-display-mode="calendar" drop-down-append-to="body" format-string="dd MMM yyyy"></smart-date-time-picker>
										</div>
										<div className="col-md-3">
											<smart-drop-down-list drop-down-append-to="body" data-source='["00","01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23]'
												selected-values='["09"]'></smart-drop-down-list>
										</div>
										<div className="col-md-3">
											<smart-drop-down-list drop-down-append-to="body" data-source='["00", 15, 30, 45]'></smart-drop-down-list>
										</div>
									</div>
								</div>
							</div>
						</div>
						<smart-button className="search-now-btn">Search</smart-button>`;

		document.body.appendChild(template2);

		const template3 = document.createElement('template');

		template3.id = 'register';
		template3.innerHTML = `
							<div className="row-separator">
								<label>First Name</label>
								<div className="filter-content">
									<smart-input></smart-input>
								</div>
							</div>
							<div className="row-separator">
								<label>Last Name</label>
								<div className="filter-content">
									<smart-input></smart-input>
								</div>
							</div>
							<div className="row-separator">
								<label>Email</label>
								<div className="filter-content">
									<smart-input></smart-input>
								</div>
							</div>
							<div className="row-separator">
								<label>Login</label>
								<div className="filter-content">
									<smart-input></smart-input>
								</div>
							</div>
							<div className="row-separator">
								<label>Password</label>
								<div className="filter-content">
									<smart-password-text-box></smart-password-text-box>
								</div>
							</div>
							<div className="row-separator">
								<label>Confirm Password</label>
								<div className="filter-content">
									<smart-password-text-box></smart-password-text-box>
								</div>
							</div>`;

		document.body.appendChild(template3);
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<header>
					<div className="header-container"> <span>Euro Air</span>
						<div className="header-icon-container"> <i className="material-icons">search</i>
							<i className="material-icons">notifications</i>
							<i className="material-icons">language</i>
						</div>
					</div>
				</header>
				<section className="page-container">
					<div className="smart-grid-layout centered">
						<div className="row">
							<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
								<div className="search-container">
									<Accordion ref={this.accordion} onExpand={this.loadAccordion.bind(this)} expandMode="singleFitHeight">
										<AccordionItem label="Look for a Flight">
											<div className="row-separator">
												<label>Trip</label>
												<div className="filter-content">
													<RadioButton ref={this.radiobutton} onChange={this.flightTripType.bind(this)} checked className="trip-type">One-Way</RadioButton>
													<RadioButton ref={this.radiobutton2} onChange={this.flightTripType.bind(this, true)} className="trip-type return">Return</RadioButton>
												</div>
											</div>
											<div className="row-separator">
												<label>From</label>
												<div className="filter-content">
													<DropDownList  filterable dropDownAppendTo="body">
														<ListItem value="1">Riga</ListItem>
														<ListItem value="2">Moscow</ListItem>
														<ListItem value="3">Prague</ListItem>
														<ListItem value="4">Kiev</ListItem>
														<ListItem value="5">St.Petersburg</ListItem>
														<ListItem value="6">Minsk</ListItem>
													</DropDownList>
												</div>
											</div>
											<div className="row-separator">
												<label>To</label>
												<div className="filter-content">
													<DropDownList  filterable dropDownAppendTo="body">
														<ListItem value="1">Riga</ListItem>
														<ListItem value="2">Moscow</ListItem>
														<ListItem value="3">Prague</ListItem>
														<ListItem value="4">Kiev</ListItem>
														<ListItem value="5">St.Petersburg</ListItem>
														<ListItem value="6">Minsk</ListItem>
													</DropDownList>
												</div>
											</div>
											<div className="row-separator">
												<label>Departure</label>
												<div className="filter-content">
													<DateTimePicker  calendarButton enableMouseWheelAction
														dropDownPosition="center-bottom" spinButtons spinButtonsPosition="left"
														dropDownDisplayMode="calendar" dropDownAppendTo="body" formatString="dd MMM yyyy"></DateTimePicker>
												</div>
											</div>
											<div ref={this.rowseparator} className="row-separator return smart-hidden">
												<label>Return</label>
												<div className="filter-content">
													<DateTimePicker calendarButton enableMouseWheelAction
														dropDownPosition="center-bottom" spinButtons spinButtonsPosition="left"
														dropDownDisplayMode="calendar" dropDownAppendTo="body" formatString="dd MMM yyyy"></DateTimePicker>
												</div>
											</div>
											<div className="row-separator">
												<label>Adults</label>
												<div className="filter-content">
													<NumericTextBox value={1} spinButtons spinButtonsPosition="left" enableMouseWheelAction></NumericTextBox>
												</div>
											</div>
											<div className="row-separator">
												<label>Children</label>
												<div className="filter-content">
													<NumericTextBox value={0} spinButtons spinButtonsPosition="left" enableMouseWheelAction></NumericTextBox>
												</div>
											</div>
											<Button className="search-now-btn">Search now</Button>
										</AccordionItem>
										<AccordionItem label="Hotels" id="hotelsItem"></AccordionItem>
										<AccordionItem label="Cars" id="carsItem"></AccordionItem>
										<AccordionItem label="Register" id="registerItem"></AccordionItem>
									</Accordion>
								</div>
							</div>
							<div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-12">
								<div className="flights-container">
									<Card className="flights-card">
										<div className="title">Flights</div>
										<Tabs  onChange={this.loadGrid.bind(this)} id="tabs3">
											<TabItem label="Offers">
												<div id="offersGrid"></div>
											</TabItem>
											<TabItem label="Regular">
												<div id="regularGrid"></div>
											</TabItem>
											<TabItem label="Info">
												<div id="infoGrid"></div>
											</TabItem>
										</Tabs>
									</Card>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
