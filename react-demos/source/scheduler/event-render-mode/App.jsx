import React from "react";
import ReactDOM from "react-dom";
import { Input } from 'smart-webcomponents-react/input';
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
			label: 'Google AdWords Strategy',
			dateStart: new Date(currentYear, currentMonth, currentDate - 10, 9, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 11, 10, 30),
			allDay: true,
			backgroundColor: '#616161'
		}, {
			label: 'New Brochures',
			dateStart: new Date(currentYear, currentMonth, currentDate - 11, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 12, 14, 15),
			backgroundColor: '#0B8043'
		}, {
			label: 'Brochure Design Review',
			dateStart: new Date(currentYear, currentMonth, currentDate - 12, 13, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 4, 16, 15),
			backgroundColor: '#F6BF26'
		}, {
			label: 'Website Re-Design Plan',
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 16, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 3, 11, 15),
			backgroundColor: '#F4511E'
		},
		{
			label: 'Rollout of New Website and Marketing Brochures',
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 10, 45),
			backgroundColor: '#F6BF26'
		}, {
			label: 'Update Sales Strategy Documents',
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 13, 45),
			backgroundColor: '#E67C73'
		}, {
			label: 'Non-Compete Agreements',
			dateStart: new Date(currentYear, currentMonth, currentDate - 3, 8, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 3, 9, 30),
			backgroundColor: '#616161'
		}, {
			label: 'Approve Hiring of John Jeffers',
			dateStart: new Date(currentYear, currentMonth, currentDate - 3, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 3, 11, 15),
			backgroundColor: '#F6BF26'
		}, {
			label: 'Update NDA Agreement',
			dateStart: new Date(currentYear, currentMonth, currentDate - 3, 11, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 3, 13, 45),
			backgroundColor: '#7986CB'
		}, {
			label: 'Update Employee Files with New NDA',
			dateStart: new Date(currentYear, currentMonth, currentDate - 3, 14, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 3, 16, 45),
			backgroundColor: '#33B679'
		}, {
			label: 'Submit Questions Regarding New NDA',
			dateStart: new Date(currentYear, currentMonth, currentDate - 6, 8, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 6, 9, 30),
			backgroundColor: '#039BE5'
		}, {
			label: 'Submit Signed NDA',
			dateStart: new Date(currentYear, currentMonth, currentDate - 6, 12, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 6, 14, 0),
			backgroundColor: '#7986CB'
		}, {
			label: 'Review Revenue Projections',
			dateStart: new Date(currentYear, currentMonth, currentDate - 6, 17, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 6, 18, 0),
			backgroundColor: '#F4511E'
		}, {
			label: 'Comment on Revenue Projections',
			dateStart: new Date(currentYear, currentMonth, currentDate - 5, 9, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 5, 11, 15),
			backgroundColor: '#FFAB00'
		}, {
			label: 'Provide New Health Insurance Docs',
			dateStart: new Date(currentYear, currentMonth, currentDate - 5, 12, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 5, 14, 15),
			backgroundColor: '#039BE5'
		}, {
			label: 'Review Changes to Health Insurance Coverage',
			dateStart: new Date(currentYear, currentMonth, currentDate - 5, 14, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 5, 15, 30),
			backgroundColor: '#388E3C'
		}, {
			label: 'Review Training Course for any Ommissions',
			dateStart: new Date(currentYear, currentMonth, currentDate - 8, 14, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 9, 15, 0),
			backgroundColor: '#E67C73'
		}, {
			label: 'Recall Rebate Form',
			dateStart: new Date(currentYear, currentMonth, currentDate - 8, 12, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 8, 13, 15),
			backgroundColor: '#388E3C'
		}, {
			label: 'Create Report on Customer Feedback',
			dateStart: new Date(currentYear, currentMonth, currentDate - 9, 15, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 9, 17, 30),
			backgroundColor: '#388E3C'
		}, {
			label: 'Review Customer Feedback Report',
			dateStart: new Date(currentYear, currentMonth, currentDate - 9, 16, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 9, 18, 30),
			backgroundColor: '#D500F9'
		}, {
			label: 'Customer Feedback Report Analysis',
			dateStart: new Date(currentYear, currentMonth, currentDate - 10, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 10, 10, 30),
			backgroundColor: '#D81B60'
		}, {
			label: 'Prepare Shipping Cost Analysis Report',
			dateStart: new Date(currentYear, currentMonth, currentDate - 10, 12, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 10, 13, 30),
			backgroundColor: '#00ACC1'
		}, {
			label: 'Provide Feedback on Shippers',
			dateStart: new Date(currentYear, currentMonth, currentDate - 10, 14, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 10, 16, 0),
			backgroundColor: '#00838F'
		}, {
			label: 'Select Preferred Shipper',
			dateStart: new Date(currentYear, currentMonth, currentDate - 10, 17, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 10, 20, 0),
			backgroundColor: '#64DD17'
		}, {
			label: 'Complete Shipper Selection Form',
			dateStart: new Date(currentYear, currentMonth, currentDate - 11, 8, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 11, 10, 0),
			backgroundColor: '#F57C00'
		}, {
			label: 'Upgrade Server Hardware',
			dateStart: new Date(currentYear, currentMonth, currentDate - 11, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 11, 14, 15),
			backgroundColor: '#2962FF'
		}, {
			label: 'Upgrade Personal Computers',
			dateStart: new Date(currentYear, currentMonth, currentDate - 11, 14, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 11, 16, 30),
			backgroundColor: '#536DFE'
		}, {
			label: 'Upgrade Apps to Windows RT or stay with WinForms',
			dateStart: new Date(currentYear, currentMonth, currentDate - 12, 10, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 12, 13, 0),
			backgroundColor: '#512DA8'
		}, {
			label: 'Estimate Time Required to Touch-Enable Apps',
			dateStart: new Date(currentYear, currentMonth, currentDate - 12, 14, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 12, 16, 30),
			backgroundColor: '#388E3C'
		}, {
			label: 'Report on Tranistion to Touch-Based Apps',
			dateStart: new Date(currentYear, currentMonth, currentDate - 12, 18, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 12, 19, 0),
			backgroundColor: '#C62828'
		}, {
			label: 'Submit New Website Design',
			dateStart: new Date(currentYear, currentMonth, currentDate - 3, 8, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 3, 10, 0),
			backgroundColor: '#AB47BC'
		}, {
			label: 'Create Icons for Website',
			dateStart: new Date(currentYear, currentMonth, currentDate - 3, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 3, 13, 15),
			backgroundColor: '#FF5722'
		}, {
			label: 'Create New Product Pages',
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 9, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 11, 45),
			backgroundColor: '#FF6E40'
		}, {
			label: 'Approve Website Launch',
			dateStart: new Date(currentYear, currentMonth, currentDate - 2, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 2, 15, 15),
			backgroundColor: '#1B5E20'
		}, {
			label: 'Update Customer Shipping Profiles',
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 11, 0),
			backgroundColor: '#795548'
		}, {
			label: 'Create New Shipping Return Labels',
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 12, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 14, 0),
			backgroundColor: '#F50057'
		}, {
			label: 'Get Design for Shipping Return Labels',
			dateStart: new Date(currentYear, currentMonth, currentDate - 1, 15, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate - 1, 16, 30),
			backgroundColor: '#0091EA'
		}, {
			label: 'PSD needed for Shipping Return Labels',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 8, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 9, 15),
			backgroundColor: '#FF6D00'
		}, {
			label: 'Contact ISP and Discuss Payment Options',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 11, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 16, 0),
			backgroundColor: '#AB47BC'
		}, {
			label: 'Prepare Year-End Support Summary Report',
			dateStart: new Date(currentYear, currentMonth, currentDate + 1, 17, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 1, 20, 0),
			backgroundColor: '#8D6E63'
		}, {
			label: 'Review New Training Material',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 8, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 9, 15),
			backgroundColor: '#FF9800'
		}, {
			label: 'Distribute Training Material to Support Staff',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 12, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 14, 0),
			backgroundColor: '#00838F'
		}, {
			label: 'Training Material Distribution Schedule',
			dateStart: new Date(currentYear, currentMonth, currentDate + 2, 14, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 2, 16, 15),
			backgroundColor: '#43A047'
		}, {
			label: 'Approval on Converting to New HDMI Specification',
			dateStart: new Date(currentYear, currentMonth, currentDate + 5, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 5, 10, 15),
			backgroundColor: '#00C853'
		}, {
			label: 'Create New Spike for Automation Server',
			dateStart: new Date(currentYear, currentMonth, currentDate + 5, 10, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 5, 12, 30),
			backgroundColor: '#FB8C00'
		}, {
			label: 'Code Review - New Automation Server',
			dateStart: new Date(currentYear, currentMonth, currentDate + 5, 13, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 5, 15, 0),
			backgroundColor: '#0D47A1'
		}, {
			label: 'Confirm Availability for Sales Meeting',
			dateStart: new Date(currentYear, currentMonth, currentDate + 6, 10, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 6, 15, 15),
			backgroundColor: '#FF8F00'
		}, {
			label: 'Reschedule Sales Team Meeting',
			dateStart: new Date(currentYear, currentMonth, currentDate + 6, 16, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 6, 18, 0),
			backgroundColor: '#D500F9'
		}, {
			label: 'Send 2 Remotes for Giveaways',
			dateStart: new Date(currentYear, currentMonth, currentDate + 7, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 7, 11, 45),
			backgroundColor: '#03A9F4'
		}, {
			label: 'Discuss Product Giveaways with Management',
			dateStart: new Date(currentYear, currentMonth, currentDate + 7, 12, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 7, 16, 45),
			backgroundColor: '#2E7D32'
		}, {
			label: 'Replace Desktops on the 3rd Floor',
			dateStart: new Date(currentYear, currentMonth, currentDate + 8, 9, 30),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 8, 10, 45),
			backgroundColor: '#8BC34A'
		}, {
			label: 'Update Database with New Leads',
			dateStart: new Date(currentYear, currentMonth, currentDate + 8, 12, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 8, 14, 15),
			backgroundColor: '#BF360C'
		}, {
			label: 'Mail New Leads for Follow Up',
			dateStart: new Date(currentYear, currentMonth, currentDate + 8, 14, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 8, 15, 30),
			backgroundColor: '#A1887F'
		}, {
			label: 'Send Territory Sales Breakdown',
			dateStart: new Date(currentYear, currentMonth, currentDate + 8, 18, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate + 8, 20, 0),
			backgroundColor: '#FF5722'
		}, {
			label: 'Territory Sales Breakdown Report',
			dateStart: new Date(currentYear, currentMonth, currentDate, 8, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 9, 45),
			backgroundColor: '#F57F17'
		}, {
			label: 'Territory Sales Breakdown Report 2',
			dateStart: new Date(currentYear, currentMonth, currentDate, 8, 50),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 9, 45),
			backgroundColor: '#880E4F'
		},
		{
			label: 'Territory Sales Breakdown Report 3',
			dateStart: new Date(currentYear, currentMonth, currentDate, 8, 55),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 9, 45),
			backgroundColor: '#5D4037'
		},
		{
			label: 'Territory Sales Breakdown Report 4',
			dateStart: new Date(currentYear, currentMonth, currentDate, 9, 0),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 9, 45),
			backgroundColor: '#1565C0'
		}, {
			label: 'Report on the State of Engineering Dept',
			dateStart: new Date(currentYear, currentMonth, currentDate, 14, 45),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 15, 30),
			backgroundColor: '#43A047'
		}, {
			label: 'Staff Productivity Report',
			dateStart: new Date(currentYear, currentMonth, currentDate, 16, 15),
			dateEnd: new Date(currentYear, currentMonth, currentDate, 19, 30),
			backgroundColor: '#880E4F'
		}
		];
	}

	view = 'day';

	views = ['day', 'week', 'month', 'timelineDay', 'timelineWeek'];

	hourStart = 9;

	timelineDayScale = 'halfHour';

	dataSource = ['classic', 'modern'];

	handleChange(event) {
		this.scheduler.current.eventRenderMode = event.detail.value;
	}

	init() {
	};

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Scheduler ref={this.scheduler} id="scheduler" dataSource={this.data} view={this.view}
					views={this.views}
					hourStart={this.hourStart}
					timelineDayScale={this.timelineDayScale}></Scheduler>
				<div className="options">
					<div className="description">
						<h4>Description</h4>
						<b>eventRenderMode</b> determines how the events are rendered inside the
			            cells:
			            <ul>
							<li>classic - the events are fitted inside the target cell. No event collector
			                    is used.</li>
							<li>modern - the events are fitted according to their size set via the CSS
							variable. Events that overflow will be placed inside a collector. On Mobile
			                    all events are placed inside collectors.</li>
						</ul>
					</div>
					<div className="option">
						<h4>Select Event Render Mode:</h4>
						<Input id="input" readonly dropDownButtonPosition="right" dataSource={this.dataSource}
							value="modern" onChange={this.handleChange.bind(this)}></Input>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
