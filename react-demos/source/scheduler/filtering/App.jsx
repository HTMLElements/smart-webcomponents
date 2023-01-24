import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { SwitchButton } from 'smart-webcomponents-react/switchbutton';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

class App extends React.Component {
	constructor(prop) {
		super(prop);

		this.scheduler = React.createRef();
		this.button = React.createRef();
		this.button2 = React.createRef();
		this.button3 = React.createRef();

		const today = new Date(),
			currentDate = today.getDate(),
			currentYear = today.getFullYear(),
			currentMonth = today.getMonth();

		this.dataSource = [{
			label: 'Interview Job Candidaties',
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 11, 30),
			roomId: 3
		},
		{
			label: 'Discuss New Project',
			dateStart: new Date(currentYear, currentMonth, currentDate - 3, 8, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 3, 10, 30),
			roomId: 2
		}, {
			label: 'Meet With Customers',
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 12, 0),
			roomId: 3
		},
		{
			label: 'Organize Vacations and Team Buildings',
			dateStart: new Date(currentYear, currentMonth, currentDate - 4, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 4, 12, 30),
			roomId: 1
		},
		{
			label: 'Lunch Break',
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 12),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 14, 30),
			roomId: 1
		},
		{
			label: 'Work On Task A',
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 12, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 14, 45),
			roomId: 2
		}, {
			label: 'Conduct Research On New Technologies',
			dateStart: new Date(currentYear, currentMonth, currentDate, 13),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 30),
			roomId: 4
		}, {
			label: 'Review Juniors Employees Work',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 11, 0),
			roomId: 2
		}, {
			label: 'Setup New Client Accounts',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 13, 35),
			roomId: 3
		}, {
			label: 'Perform Additional Duties',
			dateStart: new Date(currentYear, currentMonth, currentDate, 13, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 15, 15),
			roomId: 1
		}, {
			label: 'Prepare Weekly/Monthly Report',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 13, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 15, 15),
			roomId: 2
		}, {
			label: 'Install New Database',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 12, 15),
			roomId: 1
		}, {
			label: 'Approve New Online Marketing Strategy',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 14, 0),
			roomId: 2
		}, {
			label: 'Teach Junior Employees',
			dateStart: new Date(currentYear, currentMonth, currentDate, 9),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 30),
			roomId: 3
		}, {
			label: 'Mantain Database',
			dateStart: new Date(currentYear, currentMonth, currentDate + 3, 11, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 13, 30),
			roomId: 2
		}, {
			label: 'Prepare current Year Marketing Plan',
			dateStart: new Date(currentYear, currentMonth, currentDate + 4, 11, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 13, 30),
			roomId: 4
		}
		];
	}

	hourStart = 6;

	hourEnd = 18;

	filterable = true;

	resources = [{
		label: 'Rooms',
		value: 'roomId',
		dataSource: [{
			label: 'Common Area',
			id: 1,
			backgroundColor: '#F7B2AD'
		},
		{
			label: 'Conference Room',
			id: 2,
			backgroundColor: '#984447'
		},
		{
			label: 'Meeting Room',
			id: 3,
			backgroundColor: '#F4AC45'
		},
		{
			label: 'Brainstorming Room',
			id: 4,
			disabled: true,
			backgroundColor: '#27A195'
		}
		]
	}];

	showLegend = true;

	view = 'week';

	applyFilter() {
		const scheduler = this.scheduler.current,
			applyFilterButton = this.button2.current,
			clearFilter = this.button3.current;

		scheduler.filter = [
			//Show only Events from Room's with id 2 and 3
			{
				name: 'roomId',
				value: (id) => ['2', '3'].indexOf(id + '') > -1
			}
		];
		applyFilterButton.disabled = true;
		clearFilter.disabled = false;
	}

	clearFilter() {
		const scheduler = this.scheduler.current,
			applyFilterButton = this.button2.current,
			clearFilter = this.button3.current;

		scheduler.filter = null;
		clearFilter.disabled = true;
		applyFilterButton.disabled = false;
	}

	handleFiltering() {
		const scheduler = this.scheduler.current,
			applyFilterButton = this.button2.current,
			clearFilter = this.button3.current,
			filetarbleButton = this.button.current;

		scheduler.filterable = !scheduler.filterable;

		if (scheduler.filterable) {
			filetarbleButton.innerHTML = 'Disable Filtering';

			if (scheduler.filter) {
				applyFilterButton.disabled = true;
				clearFilter.disabled = false;
			}
			else {
				applyFilterButton.disabled = false;
				clearFilter.disabled = true;
			}
		}
		else {
			filetarbleButton.innerHTML = 'Enable Filtering';
			applyFilterButton.disabled = clearFilter.disabled = true;
		}
	}

	init() {
		const scheduler = this.scheduler.current;

		document.querySelector('.options').addEventListener('change', function (event) {
			const target = event.target,
				detail = event.detail.value;

			if (target.closest('.legend')) {
				scheduler.showLegend = detail;
			}
			else if (target.closest('.legend-position')) {
				scheduler.legendPosition = target.textContent.toLocaleLowerCase().indexOf('near') > -1 ? 'near' : 'far';
			}
			else if (target.closest('.legend-location')) {
				scheduler.legendLocation = target.textContent.toLocaleLowerCase().indexOf('header') > -1 ? 'header' : 'footer';
			}
			else if (target.closest('.legend-item')) {
				const resources = scheduler.resources.slice(),
					resourceItem = resources[0].dataSource.find((i) => i.id === 4);

				if (resourceItem) {
					resourceItem.disabled = detail;
				}
				
				scheduler.resources = resources;
			}
		});
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Scheduler ref={this.scheduler} id="scheduler" dataSource={this.dataSource} hourStart={this.hourStart} hourEnd={this.hourEnd}
					filterable={this.filterable} resources={this.resources}
					showLegend={this.showLegend} view={this.view}></Scheduler>
				<div class="options">
					<div class="option">
						<h4>Filter Options:</h4>
						<Button ref={this.button} id="disableFiltering" onClick={this.handleFiltering.bind(this)}>Disable Filtering</Button>
						<Button ref={this.button2} id="applyFilter" onClick={this.applyFilter.bind(this)}>Apply Filter</Button>
						<Button ref={this.button3} id="clearFilter" disabled onClick={this.clearFilter.bind(this)}>Clear Filter</Button>
					</div>
					<div class="option legend">
						<h4>Legend:</h4>
						<SwitchButton checked></SwitchButton>
					</div>
					<div class="option legend-location">
						<h4>Legend Location:</h4>
						<RadioButton checked>Footer</RadioButton>
						<RadioButton>Header</RadioButton>
					</div>
					<div class="option legend-position">
						<h4>Legend Position:</h4>
						<RadioButton checked>Near</RadioButton>
						<RadioButton>Far</RadioButton>
					</div>
					<div class="option legend-item">
						<h4>Disable/Enable Legend Item:</h4>
						<CheckBox checked>Brainstorming Room</CheckBox>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
