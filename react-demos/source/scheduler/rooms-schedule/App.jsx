import React from "react";
import ReactDOM from "react-dom";
import { Window } from 'smart-webcomponents-react/window';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

class App extends React.Component {
	constructor(prop) {
		super(prop);

		this.scheduler = React.createRef();
		this.alertWindow = React.createRef();

		this.targetEvent = null;
		this.eventEditors = null;

		const today = new Date(),
			year = today.getFullYear(),
			month = today.getMonth(),
			date = today.getDate();

		this.dataSource = [{
			label: 'Website Re-Design Plan',
			dateStart: new Date(year, month, date, 7, 30),
			dateEnd: new Date(year, month, date, 9, 30),
			roomId: 1,
		}, {
			label: 'Book Flights to San Fran for Sales Trip',
			roomId: 2,
			dateStart: new Date(year, month, date, 8, 0),
			dateEnd: new Date(year, month, date, 10, 0),
		}, {
			label: 'Install New Router in Dev',
			roomId: 3,
			dateStart: new Date(year, month, date, 9),
			dateEnd: new Date(year, month, date, 10, 30)
		}, {
			label: 'Approve Personal Computer Upgrade Plan',
			roomId: 4,
			dateStart: new Date(year, month, date, 8),
			dateEnd: new Date(year, month, date, 9, 30)
		}, {
			label: 'Final Budget Review',
			roomId: 5,
			dateStart: new Date(year, month, date, 6, 0),
			dateEnd: new Date(year, month, date, 9, 35)
		}, {
			label: 'New Brochures',
			roomId: 6,
			dateStart: new Date(year, month, date, 7, 0),
			dateEnd: new Date(year, month, date, 10, 15)
		}, {
			label: 'New Brochures',
			roomId: 7,
			dateStart: new Date(year, month, date, 8, 0),
			dateEnd: new Date(year, month, date, 9, 45)
		}, {
			label: 'Install New Database',
			roomId: 8,
			dateStart: new Date(year, month, date, 7),
			dateEnd: new Date(year, month, date, 10, 15)
		}, {
			label: 'Approve New Online Marketing Strategy',
			roomId: 9,
			dateStart: new Date(year, month, date, 6, 0),
			dateEnd: new Date(year, month, date, 9, 30)
		}, {
			label: 'Upgrade Personal Computers',
			roomId: 10,
			dateStart: new Date(year, month, date, 7),
			dateEnd: new Date(year, month, date, 9, 30)
		}, {
			label: 'Prepare year Marketing Plan',
			roomId: 11,
			dateStart: new Date(year, month, date, 9),
			dateEnd: new Date(year, month, date, 10, 45)
		}, {
			label: 'Prepare year Marketing Plan',
			roomId: 12,
			dateStart: new Date(year, month, date, 6, 30),
			dateEnd: new Date(year, month, date, 9, 30)
		}, {
			label: 'Brochure Design Review',
			roomId: 1,
			dateStart: new Date(year, month, date, 13, 0),
			dateEnd: new Date(year, month, date, 14, 30)
		}, {
			label: 'Create Icons for Website',
			roomId: 2,
			dateStart: new Date(year, month, date, 14, 0),
			dateEnd: new Date(year, month, date, 15, 30)
		}, {
			label: 'Upgrade Server Hardware',
			roomId: 3,
			dateStart: new Date(year, month, date, 15, 0),
			dateEnd: new Date(year, month, date, 16, 0)
		}, {
			label: 'Submit New Website Design',
			roomId: 4,
			dateStart: new Date(year, month, date, 16, 30),
			dateEnd: new Date(year, month, date, 18, 0)
		}, {
			label: 'Launch New Website',
			roomId: 5,
			dateStart: new Date(year, month, date, 13, 20),
			dateEnd: new Date(year, month, date, 14, 0)
		}, {
			label: 'Google AdWords Strategy',
			roomId: 6,
			dateStart: new Date(year, month, date, 17),
			dateEnd: new Date(year, month, date, 18, 30)
		}, {
			label: 'Rollout of New Website and Marketing Brochures',
			roomId: 7,
			dateStart: new Date(year, month, date, 16),
			dateEnd: new Date(year, month, date, 18)
		}, {
			label: 'Non-Compete Agreements',
			roomId: 8,
			dateStart: new Date(year, month, date, 13, 0, 0),
			dateEnd: new Date(year, month, date, 15, 45, 0)
		}, {
			label: 'Approve Hiring of John Jeffers',
			roomId: 9,
			dateStart: new Date(year, month, date, 19, 15),
			dateEnd: new Date(year, month, date, 21, 15)
		}, {
			label: 'Update NDA Agreement',
			roomId: 10,
			dateStart: new Date(year, month, date, 14),
			dateEnd: new Date(year, month, date, 15, 15)
		}, {
			label: 'Update Employee Files with New NDA',
			roomId: 11,
			dateStart: new Date(year, month, date, 17, 30),
			dateEnd: new Date(year, month, date, 19, 45)
		}, {
			label: 'Submit Questions Regarding New NDA',
			roomId: 12,
			dateStart: new Date(year, month, date, 18, 20),
			dateEnd: new Date(year, month, date, 19, 30)
		}, {
			label: 'Submit Signed NDA',
			roomId: 1,
			dateStart: new Date(year, month, date - 1, 10, 0, 0),
			dateEnd: new Date(year, month, date - 1, 12, 0, 0)
		}, {
			label: 'Review Revenue Projections',
			roomId: 2,
			dateStart: new Date(year, month, date - 1, 8, 0, 0),
			dateEnd: new Date(year, month, date - 1, 11, 0, 0)
		}, {
			label: 'Comment on Revenue Projections',
			roomId: 3,
			dateStart: new Date(year, month, date - 1, 9, 0, 0),
			dateEnd: new Date(year, month, date - 1, 12, 0, 0)
		}, {
			label: 'Comment on Revenue Projections',
			roomId: 4,
			dateStart: new Date(year, month, date - 1, 9, 15, 0),
			dateEnd: new Date(year, month, date - 1, 11, 30, 0)
		}, {
			label: 'Provide New Health Insurance Docs',
			roomId: 5,
			dateStart: new Date(year, month, date - 1, 9, 30, 0),
			dateEnd: new Date(year, month, date - 1, 12, 0, 0)
		}, {
			label: 'Review Changes to Health Insurance Coverage',
			roomId: 6,
			dateStart: new Date(year, month, date - 1, 6, 30, 0),
			dateEnd: new Date(year, month, date - 1, 11, 0, 0)
		}, {
			label: 'Review Customers Feedback',
			roomId: 7,
			dateStart: new Date(year, month, date - 1, 11, 0, 0),
			dateEnd: new Date(year, month, date - 1, 12, 0, 0)
		},
		{
			label: 'Create Personal List',
			roomId: 8,
			dateStart: new Date(year, month, date - 1, 9, 0, 0),
			dateEnd: new Date(year, month, date - 1, 12, 0, 0)
		},
		{
			label: 'Handle Issues With Customers',
			roomId: 9,
			dateStart: new Date(year, month, date - 1, 9, 30, 0),
			dateEnd: new Date(year, month, date - 1, 11, 30, 0)
		},
		{
			label: 'Review Training Course for any Ommissions',
			roomId: 10,
			dateStart: new Date(year, month, date - 1, 7, 0, 0),
			dateEnd: new Date(year, month, date - 1, 10, 30, 0)
		},
		{
			label: 'Contact Sales Dept',
			roomId: 11,
			dateStart: new Date(year, month, date - 1, 8, 30, 0),
			dateEnd: new Date(year, month, date - 1, 11, 0, 0)
		},
		{
			label: 'Brief Emloyees On New Tasks',
			roomId: 12,
			dateStart: new Date(year, month, date - 1, 9, 0, 0),
			dateEnd: new Date(year, month, date - 1, 12, 0, 0)
		},
		{
			label: 'Review Contracts',
			roomId: 1,
			dateStart: new Date(year, month, date - 1, 14, 0, 0),
			dateEnd: new Date(year, month, date - 1, 15, 30, 0)
		}, {
			label: 'Test The New Working Process',
			roomId: 2,
			dateStart: new Date(year, month, date - 1, 14),
			dateEnd: new Date(year, month, date - 1, 15)
		}, {
			label: 'Create Working Papers',
			roomId: 3,
			dateStart: new Date(year, month, date - 1, 15),
			dateEnd: new Date(year, month, date - 1, 17)
		}, {
			label: 'Estimate Losses',
			roomId: 4,
			dateStart: new Date(year, month, date - 1, 16),
			dateEnd: new Date(year, month, date - 1, 19)
		}, {
			label: 'Meet With New Employess',
			roomId: 5,
			dateStart: new Date(year, month, date - 1, 15),
			dateEnd: new Date(year, month, date - 1, 16)
		}, {
			label: 'Update Info On Inssurances',
			roomId: 6,
			dateStart: new Date(year, month, date - 1, 17),
			dateEnd: new Date(year, month, date - 1, 18, 30)
		}, {
			label: 'Review Customers Comments',
			roomId: 7,
			dateStart: new Date(year, month, date - 1, 15, 30),
			dateEnd: new Date(year, month, date - 1, 16, 45)
		},
		{
			label: 'Present Notes To Managers',
			roomId: 8,
			dateStart: new Date(year, month, date - 1, 15, 5),
			dateEnd: new Date(year, month, date - 1, 17, 10)
		},
		{
			label: 'Debug Session',
			roomId: 9,
			dateStart: new Date(year, month, date - 1, 17, 15, 0),
			dateEnd: new Date(year, month, date - 1, 19, 45, 0)
		},
		{
			label: 'Review Results',
			roomId: 10,
			dateStart: new Date(year, month, date - 1, 13, 0, 0),
			dateEnd: new Date(year, month, date - 1, 13, 30, 0)
		},
		{
			label: 'Disscuss The Bottlenecks With Colleagues',
			roomId: 11,
			dateStart: new Date(year, month, date - 1, 15, 0, 0),
			dateEnd: new Date(year, month, date - 1, 16, 20, 0)
		},
		{
			label: 'Meditate',
			roomId: 12,
			dateStart: new Date(year, month, date - 1, 18, 0, 0),
			dateEnd: new Date(year, month, date - 1, 18, 30, 0)
		}
		];
	}

	view = 'timelineDay';

	views = ['timelineDay', 'timelineWeek'];

	groupOrientation = 'vertical';

	groups = ['roomId'];

	resources = [{
		label: 'Rooms',
		value: 'roomId',
		dataSource: [{
			label: 'Playground',
			id: 1,
			type: 'Conference',
			capacity: 10,
			backgroundColor: '#919191'
		}, {
			label: 'Liberty Square',
			id: 2,
			type: 'Common',
			capacity: 20,
			backgroundColor: '#208056'
		},
		{
			label: 'Hall of Justice',
			id: 3,
			type: 'Conference',
			capacity: 25,
			backgroundColor: '#BFA300'
		},
		{
			label: 'Batcave',
			id: 4,
			type: 'Common',
			capacity: 10,
			backgroundColor: '#7B60BF'
		},
		{
			label: 'Thunderdome',
			id: 5,
			type: 'Common',
			capacity: 20,
			backgroundColor: '#800000'
		},
		{
			label: 'Spider Island',
			id: 6,
			type: 'Conference',
			capacity: 15,
			backgroundColor: '#6097BF'
		},
		{
			label: 'Summer',
			id: 7,
			type: 'Conference',
			capacity: 4,
			backgroundColor: '#BF00A6'
		},
		{
			label: 'Deatch Start',
			id: 8,
			type: 'Common',
			capacity: 6,
			backgroundColor: '#0091EA'
		},
		{
			label: 'Photogenic',
			id: 9,
			type: 'Common',
			capacity: 7,
			backgroundColor: '#43A047'
		},
		{
			label: 'Dragonstone',
			id: 10,
			type: 'Conference',
			capacity: 10,
			backgroundColor: '#A1887F'
		},
		{
			label: 'Riverrun',
			id: 11,
			type: 'Common',
			capacity: 12,
			backgroundColor: '#26A69A'
		},
		{
			label: 'Appropriate',
			id: 12,
			type: 'Conference',
			capacity: 15,
			backgroundColor: '#FFAB40'
		}
		]
	}];

	groupTemplate = 'groupTemplate';

	cellTemplate = (cell, value) => {
		//Set the cell Lunch Break label
		cell.textContent = value.getHours() === 12 ? 'Lunch Break' : '';
	};

	restrictedHours = [12];

	notifyForRestrictions(event) {
		const scheduler = this.scheduler.current;

		if (scheduler.isEventRestricted(event.detail.itemDateRange)) {
			this.openNotification();
		}
	}

	setEventEditDetails(event) {
		const eventDetails = event.detail;

		this.targetEvent = eventDetails.item;
		this.eventEditors = eventDetails.editors;
	}

	clearEventEdit() {
		this.targetEvent = undefined;
	}

	checkEventEdit() {
		const scheduler = this.scheduler.current;

		if (!this.targetEvent || !this.eventEditors) {
			return;
		}

		const dateStart = this.eventEditors.dateStart.querySelector('[event-editor]').value.toDate(),
			dateEnd = this.eventEditors.dateEnd.querySelector('[event-editor]').value.toDate();

		if (scheduler.isEventRestricted({
			dateStart: dateStart,
			dateEnd: dateEnd
		})) {
			this.openNotification();
		}
	}

	openNotification() {
		this.alertWindow.current.open();
	}

	init() {
		const scheduler = this.scheduler.current,
			alertWindow = this.alertWindow.current,
			today = new Date();

		alertWindow.nativeElement.addEventListener('confirm', () => alertWindow.close());
		scheduler.scrollToDate(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6), true);

		const template = document.createElement('template');

		template.id = 'groupTemplate';
		template.innerHTML = `
				<span className="col" title="Room Name">{{label}}</span>
				<span className="col" title="Room Type">{{type}}</span>
				<span className="col" title="Room Capacity">{{capacity}}</span>`;

		document.body.appendChild(template);

		scheduler.groupTemplate = template.id;
	};

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Scheduler ref={this.scheduler} id="scheduler" view={this.view} views={this.views} groupOrientation={this.groupOrientation}
					groups={this.groups} resources={this.resources} label={this.label} value={this.value} dataSource={this.dataSource}
					cellTemplate={this.cellTemplate.bind(this)} restrictedHours={this.restrictedHours}
					onResizeEnd={this.notifyForRestrictions.bind(this)} onDragEnd={this.notifyForRestrictions.bind(this)}
					onEditDialogOpen={this.setEventEditDetails.bind(this)} onEditDialogClose={this.clearEventEdit.bind(this)}
					onItemUpdate={this.checkEventEdit.bind(this)}></Scheduler>
				<Window ref={this.alertWindow} id="alertWindow" label="Alert">
					<h4>Event cannot last within the Lunch Break !</h4>
				</Window>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
