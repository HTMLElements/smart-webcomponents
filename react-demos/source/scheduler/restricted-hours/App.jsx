import React from "react";
import ReactDOM from "react-dom";
import { Scheduler } from 'smart-webcomponents-react/scheduler';

class App extends React.Component {
	constructor(prop) {
		super(prop);

		this.scheduler = React.createRef();
		this.targetEvent = null;
		this.eventEditors = null;

		const today = new Date(),
			currentDate = today.getDate(),
			currentYear = today.getFullYear(),
			currentMonth = today.getMonth();

		this.dataSource = [{
			label: 'Google AdWords Strategy',
			dateStart: new Date(currentYear, currentMonth, currentDate, 9, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 10, 30),
			backgroundColor: '#FF8A80'
		}, {
			label: 'New Brochures',
			dateStart: new Date(currentYear, currentMonth, currentDate, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 14, 15),
			backgroundColor: '#9C27B0'
		}, {
			label: 'Brochure Design Review',
			dateStart: new Date(currentYear, currentMonth, currentDate, 13, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 16, 15),
			backgroundColor: '#E57373'
		}, {
			label: 'Customer Feedback Report Analysis',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 10, 30),
			backgroundColor: '#EF6C00'
		}, {
			label: 'Prepare Shipping Cost Analysis Report',
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 12, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 13, 30),
			backgroundColor: '#004D40'
		}, {
			label: 'Provide Feedback on Shippers',
			dateStart: new Date(currentYear, currentMonth, currentDate, 14, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 16, 0),
			backgroundColor: '#00838F'
		}, {
			label: 'Select Preferred Shipper',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 17, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 20, 0),
			backgroundColor: '#9CCC65'
		}, {
			label: 'Complete Shipper Selection Form',
			dateStart: new Date(currentYear, currentMonth, currentDate - 5, 8, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 4, 10, 0),
			backgroundColor: '#BF360C'
		}, {
			label: 'Upgrade Server Hardware',
			dateStart: new Date(currentYear, currentMonth, currentDate - 7, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 7, 14, 15),
			backgroundColor: '#9575CD'
		}, {
			label: 'Upgrade Personal Computers',
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 14, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 16, 30),
			backgroundColor: '#00B0FF'
		}, {
			label: 'Upgrade Apps to Windows RT or stay with WinForms',
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 10, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 13, 0),
			backgroundColor: '#689F38'
		}, {
			label: 'Estimate Time Required to Touch-Enable Apps',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 14, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 16, 30),
			backgroundColor: '#7986CB'
		}, {
			label: 'Report on Tranistion to Touch-Based Apps',
			dateStart: new Date(currentYear, currentMonth, currentDate + 3, 18, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 19, 0),
			backgroundColor: '#EA80FC'
		}, {
			label: 'Submit New Website Design',
			dateStart: new Date(currentYear, currentMonth, currentDate + 5, 8, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 5, 10, 0),
			backgroundColor: '#757575'
		}, {
			label: 'Create Icons for Website',
			dateStart: new Date(currentYear, currentMonth, currentDate + 4, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 13, 15),
			backgroundColor: '#FF6E40'
		}];
	}

	view = 'day';

	hideAllDay = true;

	firstDayOfWeek = 1;

	restrictedHours = [[0, 6], 12, [20, 23]];

	notifyForRestrictions(event) {
		const scheduler = this.scheduler.current;

		if (scheduler.isEventRestricted(event.detail.itemDateRange)) {
			window.alert('Event cannot last during restricted hours !');
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
		if (!this.targetEvent || !this.eventEditors) {
			return;
		}
		const dateStart = this.eventEditors.dateStart.querySelector('[event-editor]').value.toDate(),
			dateEnd = this.eventEditors.dateEnd.querySelector('[event-editor]').value.toDate();

		if (this.scheduler.isEventRestricted({
			dateStart: dateStart,
			dateEnd: dateEnd
		})) {
			window.alert('Event cannot start/end on restricted Hours !');
		}
	}

	componentDidMount() {
	}

	render() {
		return (
			<Scheduler ref={this.scheduler} id="scheduler" view={this.view} hideAllDay={this.hideAllDay} dataSource={this.dataSource}
				firstDayOfWeek={this.firstDayOfWeek} restrictedHours={this.restrictedHours} onResizeEnd={this.notifyForRestrictions.bind(this)}
				onDragEnd={this.notifyForRestrictions.bind(this)} onEditDialogOpen={this.setEventEditDetails.bind(this)}
				onEditDialogClose={this.clearEventEdit.bind(this)} onItemUpdate={this.checkEventEdit.bind(this)}></Scheduler>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
