import React from "react";
import ReactDOM from "react-dom";
import { DropDownList, ListItem, ListItemsGroup } from 'smart-webcomponents-react/dropdownlist';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';
import { RadioButton } from 'smart-webcomponents-react/radiobutton';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttchart = React.createRef();
	}

	dataSource = [{
		label: 'Company Acqusition',
		synchronized: true,
		expanded: true,
		type: 'task',
		disableResources: true,
		connections: [{
			target: 17,
			type: 1
		}],
		tasks: [{
			label: 'Rebranding',
			synchronized: true,
			expanded: true,
			type: 'project',
			disableResources: true,
			tasks: [{
				label: 'Software rebranding',
				synchronized: true,
				expanded: true,
				type: 'project',
				disableResources: true,
				tasks: [{
					label: 'Website refresh',
					dateStart: '2020-06-01',
					dateEnd: '2020-06-30',
					progress: 25,
					type: 'task',
					connections: [{
						target: 4,
						type: 0
					}],
					resources: {
						id: 'lana',
						label: 'Lana',
						type: 'worker'
					}
				},
				{
					label: 'Services refresh',
					dateStart: '2020-06-01',
					dateEnd: '2020-07-30',
					progress: 15,
					type: 'task',
					resources: {
						id: 'brian',
						label: 'Brian',
						type: 'worker'
					}
				}
				]
			},
			{
				label: 'Physical rebranding',
				synchronized: true,
				expanded: true,
				type: 'project',
				disableResources: true,
				tasks: [{
					label: 'Building refresh',
					dateStart: '2020-06-01',
					dateEnd: '2020-09-30',
					progress: 5,
					type: 'task',
					connections: [{
						target: 7,
						type: 0
					}],
					resources: {
						id: 'buildCompany',
						label: 'Building Company',
						type: 'outsource'
					}
				},
				{
					label: 'Company vehicles refresh',
					dateStart: '2020-06-01',
					dateEnd: '2020-08-31',
					progress: 10,
					type: 'task',
					resources: {
						id: 'carCompany',
						label: 'Car Company',
						type: 'outsource'
					}
				}
				]
			}
			]
		},
		{
			label: 'Contracting',
			synchronized: true,
			expanded: true,
			type: 'project',
			disableResources: true,
			tasks: [{
				label: 'Review Current Staff',
				dateStart: '2020-06-01',
				dateEnd: '2020-07-30',
				progress: 50,
				type: 'task',
				connections: [{
					target: 10,
					type: 1
				}],
				resources: {
					id: 'rachel',
					label: 'Rachel',
					type: 'manager'
				}
			},
			{
				label: 'Find More Clients',
				dateStart: '2020-08-01',
				dateEnd: '2020-12-01',
				type: 'task',
				resources: {
					id: 'maria',
					label: 'Maria',
					type: 'manager'
				}
			}
			]
		},
		{
			label: 'Commercialization',
			synchronized: true,
			expanded: true,
			type: 'project',
			disableResources: true,
			tasks: [{
				label: 'TV Commercials',
				dateStart: '2020-06-01',
				dateEnd: '2020-09-01',
				progress: 30,
				type: 'task',
				connections: [{
					target: 13,
					type: 0
				}],
				resources: [{
					id: 'nate',
					label: 'Nate',
					type: 'commerce'
				},
				{
					id: 'miguel',
					label: 'Miguel',
					type: 'commerce'
				}
				]
			},
			{
				label: 'Internet Commercials',
				dateStart: '2020-06-01',
				dateEnd: '2020-12-31',
				progress: 60,
				type: 'task',
				resources: {
					id: 'commerceCompany',
					label: 'Online Commercials',
					type: 'outsource'
				}
			}
			]
		},
		{
			label: 'Investments',
			synchronized: true,
			expanded: true,
			type: 'project',
			disableResources: true,
			tasks: [{
				label: 'Bank Loans',
				dateStart: '2020-05-01',
				dateEnd: '2020-12-31',
				progress: 70,
				type: 'task',
				connections: [{
					target: 16,
					type: 0
				}],
				resources: {
					id: 'bank',
					label: 'Bank',
					type: 'investor'
				}
			},
			{
				label: 'Direct Investors',
				dateStart: '2020-06-01',
				dateEnd: '2021-01-01',
				progress: 30,
				type: 'task',
				resources: {
					id: 'shareholders',
					label: 'Shareholders',
					type: 'investor'
				}
			}
			]
		}
		]
	},
	{
		label: 'Phase 1 Completed',
		dateStart: '2021-01-10',
		type: 'milestone'
	}];

	taskColumns = [{
		label: 'Tasks',
		value: 'label',
		size: '45%'
	},
	{
		label: 'Start Date',
		value: 'dateStart',
		size: '20%'
	},
	{
		label: 'End Date',
		value: 'dateEnd',
		size: '20%'
	},
	{
		label: 'Assigned',
		value: 'resources',
		formatFunction: function (data, taskIndex) {
			return `<span>${data.length > 0 ? '&#10003' : '&#10007'}</span>`;
		}
	}];

	resourceColumns = [{
		label: 'Employees',
		value: 'label'
	},
	{
		label: 'Position',
		value: 'type',
		size: '25%'
	}];

	treeSize = '30%';

	resourcePanelSize = 200;

	durationUnit = 'day';

	view = 'month';

	timelineHeaderFormatFunction(date, type, isHeaderDetails) {
		const that = document.querySelector('smart-gantt-chart'),
			weekStartDate = new Date(date);
		if (isHeaderDetails) {
			return weekStartDate.toLocaleDateString(that.locale, {
				month: that.monthFormat,
				year: that.yearFormat
			});
		} else {
			return weekStartDate.toLocaleDateString(that.locale, {
				day: 'numeric',
				month: that.monthFormat
			});
		}
	}

	handleChange(event) {
		const ganttChart = this.ganttchart.current,
			target = (event.target);

		if (target instanceof window.Smart.DropDownList) {
			const filter = event.detail.value,
				resources = ganttChart.resources;

			//Important Note: Begins a batch update
			ganttChart.beginUpdate();

			if (filter === 'all') {
				for (let i = 0; i < resources.length; i++) {
					const resource = resources[i];
					if (resource.hidden) {
						ganttChart.updateResource(resource, {
							hidden: false
						});
					}
				}
			}
			else {
				for (let i = 0; i < resources.length; i++) {
					const resource = resources[i];

					if (resource.type !== filter) {
						ganttChart.updateResource(resource, {
							hidden: true
						});
					}
					else {
						ganttChart.updateResource(resource, {
							hidden: false
						});
					}
				}
			}

			//Important Note: Ends the batch update
			ganttChart.endUpdate();
			return;
		}

		if (target instanceof window.Smart.RadioButton && event.detail.value) {
			ganttChart.resourceTimelineView = target.value;
		}
	}

	handleReady() {
		ReactDOM.render(<DropDownList id="resourceFilter"
			dropDownAppendTo="body">
			<ListItem value="all" selected>All</ListItem>
			<ListItem value="investor">Investors</ListItem>
			<ListItem value="manager">Managers</ListItem>
			<ListItem value="worker">Workers</ListItem>
			<ListItem value="outsource">External Company</ListItem>
		</DropDownList>, new DocumentFragment(), function () {
			document.getElementById('treeHeaderTemplateContainer').appendChild(this.nativeElement);
		});

		ReactDOM.render(<RadioButton checked value="hours">Hours per week</RadioButton>, new DocumentFragment(), function () {
			document.getElementById('timelineHeaderTemplateContainer').appendChild(this.nativeElement);
		});
		ReactDOM.render(<RadioButton value="tasks">Tasks per week</RadioButton>, new DocumentFragment(), function () {
			document.getElementById('timelineHeaderTemplateContainer').appendChild(this.nativeElement);
		});

		document.querySelector('.custom-resource-panel-header').addEventListener('change', this.handleChange.bind(this));
	}

	init() {
		const that = this;
		const template = document.createElement('template');

		template.id = 'headerTemplate';
		template.innerHTML = `<div class="custom-resource-panel-header">
								<div class="treeHeader" id="treeHeaderTemplateContainer">
									<label>Resources Type:</label>
								</div>
								<div class="timelineHeader" id="timelineHeaderTemplateContainer"></div>
							</div>`;

		document.body.appendChild(template);

		that.ganttchart.current.resourcePanelHeaderTemplate = template.id;
	}


	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<div id="description">
					<p> <b>Description:</b> The following demo displays a Company Acqusition process
						where the Timeline is in months by displaying the weeks of the months from
						their starting date. Some of the Tasks have Resources assigned to them.
						Selecting a resource from the Resource Tree will highligh the assigned
						task and vice versa. The Resource Timeline indicates the working hours
						for each week by resource. A Custom Header is applied to the Resource Panel
						and it contains controls that allow to filter the resources by type or
						change the Resource Timeline view.</p>
				</div>
				<GanttChart ref={this.ganttchart} id="ganttChart" onReady={this.handleReady.bind(this)} taskColumns={this.taskColumns} resourceColumns={this.resourceColumns}
					dataSource={this.dataSource} treeSize={this.treeSize} taskPanelSize={this.taskPanelSize} durationUnit={this.durationUnit} view={this.view}
					timelineHeaderFormatFunction={this.timelineHeaderFormatFunction.bind(this)}></GanttChart>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
