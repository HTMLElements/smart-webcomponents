import React from "react";
import ReactDOM from "react-dom";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Scheduler } from 'smart-webcomponents-react/scheduler';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.scheduler = React.createRef();

		const today = new Date(),
			currentDate = today.getDate(),
			currentYear = today.getFullYear(),
			currentMonth = today.getMonth();

		this.data = [{
			label: 'Website Re-Design Plan',
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 11, 30),
			backgroundColor: '#2196F3'
		}, {
			label: 'Book Flights to San Fran for Sales Trip',
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 12, 0),
			backgroundColor: '#8BC34A'
		},
		{
			label: 'Install New Router in Conference Room',
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 12),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 14, 30),
			backgroundColor: '#FFAB91'
		},
		{
			label: 'Add a new desk to the Dev Room',
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 12, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 14, 45),
			backgroundColor: '#BCAAA4'
		}, {
			label: 'Install New Router in Dev Room',
			dateStart: new Date(currentYear, currentMonth, currentDate, 13),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 30),
			backgroundColor: '#FDD835'
		}, {
			label: 'Approve Personal Computer Upgrade Plan',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 11, 0),
			backgroundColor: '#4CAF50'
		}, {
			label: 'Final Budget Review',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 13, 35),
			backgroundColor: '#311B92'
		}, {
			label: 'Old Brochures',
			dateStart: new Date(currentYear, currentMonth, currentDate, 13, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 15, 15),
			backgroundColor: '#DD2C00'
		}, {
			label: 'New Brochures',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 13, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 15, 15),
			backgroundColor: '#9575CD'
		}, {
			label: 'Install New Database',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 9),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 12, 15),
			backgroundColor: '#FF7043'
		}, {
			label: 'Approve New Online Marketing Strategy',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 14, 0),
			backgroundColor: '#689F38'
		}, {
			label: 'Upgrade Personal Computers',
			dateStart: new Date(currentYear, currentMonth, currentDate, 9),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 11, 30),
			backgroundColor: '#00C853'
		}, {
			label: 'Prepare current Year Marketing Plan',
			dateStart: new Date(currentYear, currentMonth, currentDate + 3, 11, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 13, 30),
			backgroundColor: '#7986CB'
		}, {
			label: 'Prepare current Year Marketing Plan',
			dateStart: new Date(currentYear, currentMonth, currentDate + 4, 11, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 4, 13, 30),
			backgroundColor: '#CE93D8'
		}
		];
	}

	view = 'day';

	views = [{
		type: 'day',
		label: 'This is the Day View Label'
	},
	{
		type: 'week',
		label: 'This is the Week View Label'
	},
	{
		type: 'month',
		label: 'This is the Month View Label'
	}];

	init() {
		const scheduler = this.scheduler.current;

		document.querySelector('.options').addEventListener('change', function (event) {
			const target = event.target.closest('smart-radio-button');

			scheduler.viewSelectorType = target.textContent.trim();
		});
	};

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Scheduler ref={this.scheduler} id="scheduler" dataSource={this.data} view={this.view} views={this.views}></Scheduler>
				<div className="options">
					<div className="description">
						<h4>ViewSelectorType</h4> determines presentation and navigation of the view tabs inside the header.
			            <ul>
							<li><b>auto</b> - When the tab labels overflow the container, a drop down button
			                    appears that allows to open a drop down to select a view.</li>
							<li><b>tabs</b> - when the tab labels overflow the container, two navigation
			                    buttons are displayed on each end that allo to scroll through the tabs.</li>
							<li><b>menu</b> - Default behavior. A drop down button is always present in
			                    the tab selection area in the header. When clicked a popup appears to display
			                    the views available.</li>
						</ul>
					</div>
					<div className="option">
						<RadioButton>auto</RadioButton>
						<RadioButton>tabs</RadioButton>
						<RadioButton checked>menu</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
