import React from "react";
import ReactDOM from "react-dom";
import { Scheduler } from 'smart-webcomponents-react/scheduler';

class App extends React.Component {
	constructor(props) {
		super(props);

		const today = new Date(),
			year = today.getFullYear(),
			month = today.getMonth(),
			date = today.getDate();

		this.dateCurrent = new Date(year, month, date, 9, 0);

		this.data = [{
			label: 'Google AdWords Strategy',
			dateStart: new Date(year, month, date, 9, 0),
			dateEnd: new Date(year, month, date + 1, 10, 30),
			backgroundColor: '#39BF00',
			allDay: true
		}, {
			label: 'New Brochures',
			dateStart: new Date(year, month, date + 1, 11, 30),
			dateEnd: new Date(year, month, date + 2, 14, 15),
			backgroundColor: '#FFD900'
		}, {
			label: 'Brochure Design Review',
			dateStart: new Date(year, month, date + 2, 13, 15),
			dateEnd: new Date(year, month, date + 4, 16, 15),
			backgroundColor: '#FF0000'
		}, {
			label: 'Website Re-Design Plan',
			dateStart: new Date(year, month, date + 6, 16, 45),
			dateEnd: new Date(year, month, date + 10, 11, 15),
			backgroundColor: '#DADADA'
		},
		{
			label: 'Rollout of New Website and Marketing Brochures',
			dateStart: new Date(year, month, date - 8, 8, 15),
			dateEnd: new Date(year, month, date - 8, 10, 45),
			backgroundColor: '#BF6060'
		}, {
			label: 'Update Sales Strategy Documents',
			dateStart: new Date(year, month, date - 8, 12, 0),
			dateEnd: new Date(year, month, date - 8, 13, 45),
			backgroundColor: '#6D6D6D'
		}, {
			label: 'Non-Compete Agreements',
			dateStart: new Date(year, month, date - 7, 8, 15),
			dateEnd: new Date(year, month, date - 7, 9, 0),
			backgroundColor: '#BF60B2'
		}, {
			label: 'Approve Hiring of John Jeffers',
			dateStart: new Date(year, month, date - 7, 10, 0),
			dateEnd: new Date(year, month, date - 7, 11, 15),
			backgroundColor: '#689F38'
		}, {
			label: 'Update NDA Agreement',
			dateStart: new Date(year, month, date - 7, 11, 45),
			dateEnd: new Date(year, month, date - 7, 13, 45),
			backgroundColor: '#004A80'
		}, {
			label: 'Update Employee Files with New NDA',
			dateStart: new Date(year, month, date - 7, 14, 0),
			dateEnd: new Date(year, month, date - 7, 16, 45),
			backgroundColor: '#7CBF60'
		}, {
			label: 'Submit Questions Regarding New NDA',
			dateStart: new Date(year, month, date - 4, 8, 0),
			dateEnd: new Date(year, month, date - 4, 9, 30),
			backgroundColor: '#BFB160'
		}, {
			label: 'Submit Signed NDA',
			dateStart: new Date(year, month, date - 4, 12, 45),
			dateEnd: new Date(year, month, date - 4, 14, 0),
			backgroundColor: '#BF6089'
		}, {
			label: 'Review Revenue Projections',
			dateStart: new Date(year, month, date - 4, 17, 15),
			dateEnd: new Date(year, month, date - 4, 18, 0),
			backgroundColor: '#0095FF'
		}, {
			label: 'Comment on Revenue Projections',
			dateStart: new Date(year, month, date - 5, 9, 15),
			dateEnd: new Date(year, month, date - 5, 11, 15),
			backgroundColor: '#689F38'
		}, {
			label: 'Provide New Health Insurance Docs',
			dateStart: new Date(year, month, date - 5, 12, 45),
			dateEnd: new Date(year, month, date - 5, 14, 15),
			backgroundColor: '#403600'
		}, {
			label: 'Review Changes to Health Insurance Coverage',
			dateStart: new Date(year, month, date - 5, 14, 15),
			dateEnd: new Date(year, month, date - 5, 15, 30),
			backgroundColor: '#4DFF00'
		}, {
			label: 'Review Training Course for any Ommissions',
			dateStart: new Date(year, month, date - 2, 14, 0),
			dateEnd: new Date(year, month, date - 1, 12, 0),
			backgroundColor: '#60BF96'
		}, {
			label: 'Recall Rebate Form',
			dateStart: new Date(year, month, date - 2, 12, 45),
			dateEnd: new Date(year, month, date - 2, 13, 15),
			backgroundColor: '#BF0052'
		}, {
			label: 'Create Report on Customer Feedback',
			dateStart: new Date(year, month, date - 1, 15, 15),
			dateEnd: new Date(year, month, date - 1, 17, 30),
			backgroundColor: '#00BF6C'
		}, {
			label: 'Review Customer Feedback Report',
			dateStart: new Date(year, month, date - 1, 16, 15),
			dateEnd: new Date(year, month, date - 1, 18, 30),
			backgroundColor: '#3600BF'
		}, {
			label: 'Customer Feedback Report Analysis',
			dateStart: new Date(year, month, date, 9, 30),
			dateEnd: new Date(year, month, date, 10, 30),
			backgroundColor: '#80006E'
		}, {
			label: 'Prepare Shipping Cost Analysis Report',
			dateStart: new Date(year, month, date, 12, 30),
			dateEnd: new Date(year, month, date, 13, 30),
			backgroundColor: '#80006E'
		}, {
			label: 'Provide Feedback on Shippers',
			dateStart: new Date(year, month, date, 14, 15),
			dateEnd: new Date(year, month, date, 16, 0),
			backgroundColor: '#919191'
		}, {
			label: 'Select Preferred Shipper',
			dateStart: new Date(year, month, date, 17, 30),
			dateEnd: new Date(year, month, date, 20, 0),
			backgroundColor: '#BF6089'
		}, {
			label: 'Complete Shipper Selection Form',
			dateStart: new Date(year, month, date + 1, 8, 30),
			dateEnd: new Date(year, month, date + 1, 10, 0),
			backgroundColor: '#BF6060'
		}, {
			label: 'Upgrade Server Hardware',
			dateStart: new Date(year, month, date + 1, 12, 0),
			dateEnd: new Date(year, month, date + 1, 14, 15),
			backgroundColor: '#00BF6C'
		}, {
			label: 'Upgrade Personal Computers',
			dateStart: new Date(year, month, date + 1, 14, 45),
			dateEnd: new Date(year, month, date + 1, 16, 30),
			backgroundColor: '#689F38'
		}, {
			label: 'Upgrade Apps to Windows RT or stay with WinForms',
			dateStart: new Date(year, month, date + 2, 10, 30),
			dateEnd: new Date(year, month, date + 2, 13, 0),
			backgroundColor: '#802049'
		}, {
			label: 'Estimate Time Required to Touch-Enable Apps',
			dateStart: new Date(year, month, date + 2, 14, 45),
			dateEnd: new Date(year, month, date + 2, 16, 30),
			backgroundColor: '#BF60B2'
		}, {
			label: 'Report on Tranistion to Touch-Based Apps',
			dateStart: new Date(year, month, date + 2, 18, 30),
			dateEnd: new Date(year, month, date + 2, 19, 0),
			backgroundColor: '#806C00'
		}, {
			label: 'Submit New Website Design',
			dateStart: new Date(year, month, date + 5, 8, 0),
			dateEnd: new Date(year, month, date + 5, 10, 0),
			backgroundColor: '#6D6D6D'
		}, {
			label: 'Create Icons for Website',
			dateStart: new Date(year, month, date + 5, 11, 30),
			dateEnd: new Date(year, month, date + 5, 13, 15),
			backgroundColor: '#FFB300'
		}, {
			label: 'Create New Product Pages',
			dateStart: new Date(year, month, date + 6, 9, 45),
			dateEnd: new Date(year, month, date + 6, 11, 45),
			backgroundColor: '#BA68C8'
		}, {
			label: 'Approve Website Launch',
			dateStart: new Date(year, month, date + 6, 12, 0),
			dateEnd: new Date(year, month, date + 6, 15, 15),
			backgroundColor: '#9CCC65'
		}, {
			label: 'Update Customer Shipping Profiles',
			dateStart: new Date(year, month, date + 7, 9, 30),
			dateEnd: new Date(year, month, date + 7, 11, 0),
			backgroundColor: '#00ACC1'
		}, {
			label: 'Create New Shipping Return Labels',
			dateStart: new Date(year, month, date + 7, 12, 45),
			dateEnd: new Date(year, month, date + 7, 14, 0),
			backgroundColor: '#689F38'
		}, {
			label: 'Get Design for Shipping Return Labels',
			dateStart: new Date(year, month, date + 7, 15, 0),
			dateEnd: new Date(year, month, date + 7, 16, 30),
			backgroundColor: '#8D6E63'
		}, {
			label: 'PSD needed for Shipping Return Labels',
			dateStart: new Date(year, month, date + 8, 8, 30),
			dateEnd: new Date(year, month, date + 8, 9, 15),
			backgroundColor: '#EF5350'
		}, {
			label: 'Contact ISP and Discuss Payment Options',
			dateStart: new Date(year, month, date + 8, 11, 30),
			dateEnd: new Date(year, month, date + 8, 16, 0),
			backgroundColor: '#B388FF'
		}, {
			label: 'Prepare Year-End Support Summary Report',
			dateStart: new Date(year, month, date + 8, 17, 0),
			dateEnd: new Date(year, month, date + 8, 20, 0),
			backgroundColor: '#FFF176',
			color: '#D81B60'
		}, {
			label: 'Review New Training Material',
			dateStart: new Date(year, month, date + 9, 8, 0),
			dateEnd: new Date(year, month, date + 9, 9, 15),
			backgroundColor: '#C6FF00',
			color: '#5D4037'
		}, {
			label: 'Distribute Training Material to Support Staff',
			dateStart: new Date(year, month, date + 9, 12, 45),
			dateEnd: new Date(year, month, date + 9, 14, 0),
			backgroundColor: '#90CAF9'
		}, {
			label: 'Training Material Distribution Schedule',
			dateStart: new Date(year, month, date + 9, 14, 15),
			dateEnd: new Date(year, month, date + 9, 16, 15),
			backgroundColor: '#7CB342'
		}, {
			label: 'Approval on Converting to New HDMI Specification',
			dateStart: new Date(year, month, date + 12, 9, 30),
			dateEnd: new Date(year, month, date + 12, 10, 15),
			backgroundColor: '#26A69A'
		}, {
			label: 'Create New Spike for Automation Server',
			dateStart: new Date(year, month, date + 12, 10, 0),
			dateEnd: new Date(year, month, date + 12, 12, 30),
			backgroundColor: '#689F38'
		}, {
			label: 'Code Review - New Automation Server',
			dateStart: new Date(year, month, date + 12, 13, 0),
			dateEnd: new Date(year, month, date + 12, 15, 0),
			backgroundColor: '#00B0FF'
		}, {
			label: 'Confirm Availability for Sales Meeting',
			dateStart: new Date(year, month, date + 13, 10, 15),
			dateEnd: new Date(year, month, date + 13, 15, 15),
			backgroundColor: '#A5D6A7'
		}, {
			label: 'Reschedule Sales Team Meeting',
			dateStart: new Date(year, month, date + 13, 16, 15),
			dateEnd: new Date(year, month, date + 13, 18, 0),
			backgroundColor: '#FF6E40'
		}, {
			label: 'Send 2 Remotes for Giveaways',
			dateStart: new Date(year, month, date + 14, 9, 30),
			dateEnd: new Date(year, month, date + 14, 11, 45),
			backgroundColor: '#FFD54F'
		}, {
			label: 'Discuss Product Giveaways with Management',
			dateStart: new Date(year, month, date + 14, 12, 15),
			dateEnd: new Date(year, month, date + 14, 16, 45),
			backgroundColor: '#FF9E80'
		}, {
			label: 'Replace Desktops on the 3rd Floor',
			dateStart: new Date(year, month, date + 15, 9, 30),
			dateEnd: new Date(year, month, date + 15, 10, 45),
			backgroundColor: '#00C853'
		}, {
			label: 'Update Database with New Leads',
			dateStart: new Date(year, month, date + 15, 12, 0),
			dateEnd: new Date(year, month, date + 15, 14, 15),
			backgroundColor: '#FF6D00'
		}, {
			label: 'Mail New Leads for Follow Up',
			dateStart: new Date(year, month, date + 15, 14, 45),
			dateEnd: new Date(year, month, date + 15, 15, 30),
			backgroundColor: '#9E9E9E'
		}, {
			label: 'Send Territory Sales Breakdown',
			dateStart: new Date(year, month, date + 15, 18, 0),
			dateEnd: new Date(year, month, date + 15, 20, 0),
			backgroundColor: '#26C6DA'
		}, {
			label: 'Territory Sales Breakdown Report',
			dateStart: new Date(year, month, date + 16, 8, 45),
			dateEnd: new Date(year, month, date + 16, 9, 45),
			backgroundColor: '#C5CAE9'
		}, {
			label: 'Report on the State of Engineering Dept',
			dateStart: new Date(year, month, date + 16, 14, 45),
			dateEnd: new Date(year, month, date + 16, 15, 30),
			backgroundColor: '#689F38'
		}, {
			label: 'Staff Productivity Report',
			dateStart: new Date(year, month, date + 16, 16, 15),
			dateEnd: new Date(year, month, date + 16, 19, 30),
			backgroundColor: '#D500F9'
		}
		];
	}

	view = 'agenda';

	views = [{
		label: 'Agenda',
		type: 'agenda'
	}];

	hourStart = 9;

	init() {
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Scheduler id="scheduler" dataSource={this.data} view={this.view}
					dateCurrent={this.dateCurrent}
					views={this.views}
					hourStart={this.hourStart}></Scheduler>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
