import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { Calendar } from 'smart-webcomponents-react/calendar';
import { DateRangeInput } from 'smart-webcomponents-react/daterangeinput';
import { MultilineTextBox, ListItem, ListItemsGroup } from 'smart-webcomponents-react/multilinetextbox';
import { Window } from 'smart-webcomponents-react/window';

class App extends React.Component {
	constructor(p) {
		super(p);

		this.calendar = React.createRef();
		this.window = React.createRef();
		this.multilinetextbox = React.createRef();
		this.daterangeinput = React.createRef();
		this.eventDetails = null;
	}

	//Events data
	events = [{
		dateFrom: '2020-01-03',
		dateTo: '2020-01-12',
		description: 'ATP Cup'
	},
	{
		dateFrom: '2020-01-20',
		dateTo: '2020-02-03',
		description: 'Australian Open'
	},
	{
		dateFrom: '2020-02-03',
		dateTo: '2020-02-09',
		description: 'Cordoba Open'
	},
	{
		dateFrom: '2020-02-10',
		dateTo: '2020-02-16',
		description: 'New York Open'
	},
	{
		dateFrom: '2020-03-17',
		dateTo: '2020-03-17',
		description: 'Saint Patrick\'s Day'
	},
	{
		dateFrom: '2020-03-25',
		dateTo: '2020-04-05',
		description: 'Miami Open presneted by Itau'
	},
	{
		dateFrom: '2020-05-11',
		dateTo: '2020-05-17',
		description: 'ATP Master Tennis'
	},
	{
		dateFrom: '2020-05-21',
		dateTo: '2020-05-21',
		description: 'Arena Zagreb'
	},
	{
		dateFrom: '2020-05-23',
		dateTo: '2020-05-23',
		description: 'Gwardia Stadium'
	},
	{
		dateFrom: '2020-05-24',
		dateTo: '2020-06-07',
		description: 'French Open'
	},
	{
		dateFrom: '2021-06-08',
		dateTo: '2021-06-14',
		description: 'Mercedess Cup'
	},
	{
		dateFrom: '2020-06-21',
		dateTo: '2020-07-04',
		description: 'Wimbledon'
	},
	{
		dateFrom: '2020-07-08',
		dateTo: '2020-07-08',
		description: 'Estadio Jose Zorila'
	},
	{
		dateFrom: '2020-07-11',
		dateTo: '2020-07-11',
		description: 'Bessa Stadium'
	},
	{
		dateFrom: '2020-07-12',
		dateTo: '2020-07-12',
		description: 'Estadio Olimpico - Seville'
	},
	{
		dateFrom: '2020-07-18',
		dateTo: '2020-07-26',
		description: 'Indianopolis Tennis Championships'
	},
	{
		dateFrom: '2020-07-27',
		dateTo: '2020-08-01',
		description: 'Countrywide Classic Tennis'
	},
	{
		dateFrom: '2020-08-03',
		dateTo: '2020-08-03',
		description: 'Madison Square Garden'
	},
	{
		dateFrom: '2020-08-05',
		dateTo: '2020-08-05',
		description: 'Happy Birthday John!'
	},
	{
		dateFrom: '2021-08-10',
		dateTo: '2021-08-16',
		description: 'Rodgers Cup'
	},
	{
		dateFrom: '2020-08-07',
		dateTo: '2020-08-11',
		description: 'Western & Southern Financial Group Women\'s Open'
	},
	{
		dateFrom: '2020-08-15',
		dateTo: '2020-08-23',
		description: 'Rogers Cup Women\'s Tennis'
	},
	{
		dateFrom: '2020-08-29',
		dateTo: '2020-09-10',
		description: 'US Open Tennis Championship'
	},
	{
		dateFrom: '2020-10-31',
		dateTo: '2020-10-31',
		description: 'Konig Pilsener Arena'
	},
	{
		dateFrom: '2020-11-01',
		dateTo: '2020-11-01',
		description: 'AWD Dome'
	},
	{
		dateFrom: '2020-11-07',
		dateTo: '2020-11-07',
		description: 'SAP Arena'
	},
	{
		dateFrom: '2020-11-12',
		dateTo: '2020-11-12',
		description: 'Recinto Ferial - Valencia'
	},
	{
		dateFrom: '2020-11-22',
		dateTo: '2020-11-27',
		description: 'Barclays ATP World Tour Finals'
	},
	{
		dateFrom: '2020-12-01',
		dateTo: '2020-12-01',
		description: 'Arena Nurnberg'
	},
	{
		dateFrom: '2020-12-12',
		dateTo: '2020-12-12',
		description: 'Scottish Exhibition & Conference Center'
	},
	{
		dateFrom: '2020-12-19',
		dateTo: '2020-12-21',
		description: 'International Horse Show'
	},
	{
		dateFrom: '2020-12-24',
		dateTo: '2020-12-26',
		description: 'Merry Christmas !'
	},
	{
		dateFrom: '2020-12-27',
		dateTo: '2020-12-30',
		description: 'Peter Pan'
	},
	];

	//Handles Events Data
	getImportantDates(dataSource) {
		let dates = [];

		if (!dataSource) {
			dataSource = this.events;
		}

		for (let i = 0; i < dataSource.length; i++) {
			const event = dataSource[i];
			let dateFrom = new Date(event.dateFrom),
				dateTo = new Date(event.dateTo);
			dateFrom.setHours(0, 0, 0, 0);
			dateTo.setHours(0, 0, 0, 0);

			while (dateFrom.getTime() < dateTo.getTime()) {
				dates.push({
					date: new Date(dateFrom),
					description: event.description
				});
				dateFrom.setDate(dateFrom.getDate() + 1);
				dateFrom.setHours(0, 0, 0, 0);
			}

			dates.push({
				date: new Date(dateTo),
				description: event.description
			});
		}

		return dates;
	}
	//Returns an event based on it's Date
	getImportantDate(date) {
		date = new Date(date);
		date.setHours(0, 0, 0, 0);
		const event = this.importantDatesData.find(dateObj => dateObj.date.getTime() === date.getTime());
		if (!event) {
			return;
		}
		const eventDates = this.importantDatesData.filter(dateObj => dateObj.description === event.description);
		if (eventDates.length) {
			return {
				from: eventDates[0].date,
				to: eventDates[eventDates.length - 1].date,
				description: event.description
			};
		}
	}

	importantDatesData = this.getImportantDates();

	months = 12;

	firstDayOfWeek = 1;

	importantDates = this.importantDatesData.map((dateObj) => dateObj.date);

	scrollButtonsPosition = 'far';

	selectedDates = ['2020-01-01'];

	tooltip = true;

	handleWindowReady() {
		const calendar = this.calendar.current,
			descriptionInput = this.multilinetextbox.current,
			dateRangeInput = this.daterangeinput.current,
			eventWindow = this.window.current,
			that = this;

		//Delete Event
		document.getElementById('buttonDelete').addEventListener('click', function () {
			if (!that.eventDetails) {
				eventWindow.close();
				return;
			}

			that.importantDatesData = that.importantDatesData.filter(dateObj => dateObj.description !== that.eventDetails.description);
			calendar.importantDates = that.importantDatesData.map(dateObj => dateObj.date);
			eventWindow.close();
		});

		//Cancel Event Editing
		document.getElementById('buttonCancel').addEventListener('click', function () {
			eventWindow.close();
			that.eventDetails = null;
		});

		//Save Event
		document.getElementById('buttonSave').addEventListener('click', function () {
			if (!that.eventDetails) {
				eventWindow.close();
				return;
			}

			that.importantDatesData = that.importantDatesData.filter(dateObj => dateObj.description !== that.eventDetails.description);

			const newDateRange = dateRangeInput.value;

			if (!newDateRange) {
				return;
			}

			const newImportantDates = that.getImportantDates([{
				dateFrom: newDateRange.from,
				dateTo: newDateRange.to,
				description: descriptionInput.value || ''
			}]);

			that.importantDatesData = that.importantDatesData.concat(newImportantDates);
			calendar.importantDates = that.importantDatesData.map(dateObj => dateObj.date);
			eventWindow.close();
		});
	}

	//Handle Calendar Header buttons
	handleCalendarClick(event) {
		const calendar = this.calendar.current,
			eventWindow = this.window.current;
		let target = event.target;

		if (target.closest('.event-window-button')) {
			eventWindow.open();
		}

		target = target.closest('smart-button');

		if (!target) {
			return;
		}

		switch (target.id) {
			case 'next':
				calendar.navigate(12);
				break;
			case 'previous':
				calendar.navigate(-12);
				break;
			case 'today':
				const today = new Date();
				today.setDate(1);
				today.setMonth(0);
				calendar.navigate(today);
				break;
			case 'month':
				calendar.displayMode = 'month';
				break;
			case 'year':
				calendar.displayMode = 'year';
				break;
			case 'decade':
				calendar.displayMode = 'decade';
				break;
		}
	}

	//Handle Tooltip and prepare editor window
	handleCalendarOpen(event) {
		const descriptionInput = this.multilinetextbox.current,
			dateRangeInput = this.daterangeinput.current,
			eventWindow = this.window.current;
		const tooltip = event.detail.target;

		if (!(tooltip instanceof window.Smart.Tooltip)) {
			return;
		}

		this.eventDetails = this.getImportantDate(event.detail.value);

		if (this.eventDetails) {
			tooltip.value = eventWindow.label = descriptionInput.value = this.eventDetails.description;
			dateRangeInput.value = this.eventDetails;
		}
	}

	//Set the primary button for the current display mode
	handleDisplayModeChange() {
		const calendar = this.calendar.current;
		const displayMode = calendar.displayMode,
			viewSelection = document.querySelector('.view-selection'),
			viewSelectionButtons = viewSelection.querySelectorAll('smart-button');

		for (let i = 0; i < viewSelectionButtons.length; i++) {
			const button = viewSelectionButtons[i];

			if (button.id !== displayMode) {
				button.classList.remove('primary');
			}
			else {
				button.classList.add('primary');
			}
		}
	}

	//Create new Event on DoubleClick
	handleCalendarDblClick(event) {
		const descriptionInput = this.multilinetextbox.current,
			dateRangeInput = this.daterangeinput.current,
			eventWindow = this.window.current;
		const target = event.target,
			calendarCell = target.closest('.smart-calendar-cell');

		if (calendarCell) {
			const cellDate = new Date(calendarCell.value);
			this.eventDetails = this.getImportantDate(cellDate) || {
				from: cellDate,
				description: 'New Event'
			};

			eventWindow.label = descriptionInput.value = this.eventDetails.description;
			dateRangeInput.value = this.eventDetails;
			eventWindow.open();
		}
	}

	init() {
		const calendar = this.calendar.current,
			descriptionInput = this.multilinetextbox.current,
			dateRangeInput = this.daterangeinput.current,
			eventWindow = this.window.current;

		const templateContainer = document.getElementById('templates');

		templateContainer.innerHTML = `
			<template id="headerTemplate">
			<div className="calendar-header">
				<div className="view-selection">
					<smart-button  id="month" className="primary">Month</smart-button>
					<smart-button  id="year">Year</smart-button>
					<smart-button  id="decade">Decade</smart-button>
				</div>
				<div className="year-selector">{{date}}</div>
				<div className="navigation-buttons">
					<smart-button  id="previous" className="flat rounded">&#xe902;</smart-button>
					<smart-button  id="today" className="flat">Today</smart-button>
					<smart-button  id="next" className="flat rounded">&#xe903;</smart-button>
				</div>
			</div>
		</template>
		<template id="tooltipTemplate">
			<div className="tooltip-content">
				<smart-button  className="event-window-button button-icon floating primary"></smart-button> <span>{{day}}</span>
			</div>
		</template>
		<template id="windowFooterTemplate">
			<div className="window-footer-buttons">
				<smart-button  id="buttonDelete">Delete</smart-button>
				<smart-button  id="buttonCancel">Cancel</smart-button>
				<smart-button  id="buttonSave">Save</smart-button>
			</div>
		</template>`;

		eventWindow.footerTemplate = 'windowFooterTemplate';
		calendar.headerTemplate = 'headerTemplate';
		calendar.tooltipTemplate = 'tooltipTemplate';
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div className="demo-description">Most popular Tennis Events are added to the Calendar as <b>importantDates</b>.
			        Hover over a date in order to see the Tooltip with the event description.
			        Click on the calendar Button inside the Tooltip to edit the event. Double
			        clicking on an empty date(non-important date) will allow to add a new event(important
			        date) to the Calendar.</div>
				<Calendar ref={this.calendar} id="calendar" importantDates={this.importantDates} months={this.months}
					firstDayOfWeek={this.firstDayOfWeek} importantDates={this.importantDates}
					scrollButtonsPosition={this.scrollButtonsPosition} selectedDates={this.selectedDates}
					tooltip={this.tooltip} onClick={this.handleCalendarClick.bind(this)} onOpen={this.handleCalendarOpen.bind(this)}
					onDisplayModeChange={this.handleDisplayModeChange.bind(this)} onDoubleClick={this.handleCalendarDblClick.bind(this)}></Calendar>
				<Window ref={this.window} id="eventWindow" modal onReady={this.handleWindowReady.bind(this)}>
					<div className="window-content">
						<div>
							<label>Description</label>
							<MultilineTextBox ref={this.multilinetextbox} id="descriptionInput"
								autoExpand placeholder="Enter description"></MultilineTextBox>
						</div>
						<div>
							<label>Time period</label>
							<DateRangeInput ref={this.daterangeinput} id="dateRangeInput"
								placeholder="Enter date(s)" dropDownButtonPosition="right" valueType="object"></DateRangeInput>
						</div>
					</div>
				</Window>
				<div id="templates"></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
