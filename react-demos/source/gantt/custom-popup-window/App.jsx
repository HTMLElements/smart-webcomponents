import React from "react";
import ReactDOM from "react-dom";
import { Button, RepeatButton, ToggleButton, PowerButton } from 'smart-webcomponents-react/button';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';
import { MultilineTextBox } from 'smart-webcomponents-react/multilinetextbox';
import { TextBox } from 'smart-webcomponents-react/textbox';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttchart = React.createRef();

		this.deleteBtn = React.createRef();
		this.cancelBtn = React.createRef();
		this.saveBtn = React.createRef();
		this.dayInput = React.createRef();
		this.description = React.createRef();

		this.editedTaskIndex = null;
		this.taskLabel = null;
		this.dayPicker = null;
		this.monthPicker = null;
		this.yearPicker = null;
		this.dayIncrementBtn = null;
		this.dayDecrementBtn = null;
		this.totalDate = null;
	}

	durationUnit = 'day';

	view = 'week';

	treeSize = '40%';

	dateStart = '2021-04-01';

	timelineHeaderFormatFunction(date, type, isHeaderDetailsContainer) {
		const gantt = this.ganttchart.current;

		if (isHeaderDetailsContainer) {
			let startDate = new Date(date),
				endDate = new Date(date),
				formatDate = (date) => date.toLocaleDateString(gantt.locale, {
					day: '2-digit',
					month: 'short'
				}).toUpperCase();
			//the view is set to 'week' so add 6 days to the first to get the last
			endDate.setDate(endDate.getDate() + 6);
			//Validate the endDate according to timeline end
			endDate = new Date(Math.min(gantt.dateEnd.getTime(), endDate.getTime()));
			return formatDate(startDate) + ' - ' + formatDate(endDate);
		}
		else {
			return new Date(date).toLocaleDateString(gantt.locale, {
				weekday: 'short'
			}).toUpperCase();
		}
	};

	taskColumns = [{
		label: 'TASK NAME',
		value: 'label',
		size: '50%'
	},
	{
		label: 'START TIME',
		value: 'dateStart',
		size: '30%',
		formatFunction: function (dateString) {
			const date = new Date(dateString),
				formatNumber = (number) => ('0' + number).slice(-2);
			return date.getFullYear() + '-' + formatNumber(date.getMonth() + 1) + '-' + formatNumber(date.getDate());
		}
	},
	{
		label: 'DURATION',
		value: 'duration',
		formatFunction: (duration) => parseInt(duration)
	}
	];

	dataSource = [{
		type: 'project',
		label: 'Office Preparation',
		synchronized: true,
		expanded: true,
		progress: 35,
		tasks: [{
			label: 'Office Inspection',
			synchronized: true,
			expanded: true,
			progress: 55,
			type: 'project',
			connections: [{
				target: 'furnitureInArrangement',
				type: 1
			}],
			tasks: [{
				label: 'Interior Arrangement',
				dateStart: '2021-04-02',
				duration: 3,
				type: 'task'
			},
			{
				label: 'Climate Control Installation',
				dateStart: '2021-04-05',
				duration: 2,
				type: 'task'
			}
			]
		},
		{
			id: 'furnitureInArrangement',
			label: 'Furniture Arrangement',
			synchronized: true,
			progress: 55,
			type: 'project',
			connections: [{
				target: 'employeePositioning',
				type: 1
			}],
			tasks: [{
				label: 'Workstations Positioning',
				dateStart: '2021-04-08',
				duration: 2,
				type: 'task'
			}]
		},
		{
			id: 'employeePositioning',
			label: 'Employee Positioning',
			synchronized: true,
			expanded: true,
			progress: 50,
			type: 'project',
			tasks: [{
				label: 'Workplaces Allocation',
				dateStart: '2021-04-10',
				duration: 3,
				progress: 50,
				connections: [{
					target: 'workstationsAssembly',
					type: 1
				}],
				type: 'task'
			},
			{
				id: 'workstationsAssembly',
				label: 'Workstations Assembly',
				dateStart: '2021-04-13',
				duration: 3,
				progress: 50,
				connections: [{
					target: 'workstationsInspection',
					type: 1
				}],
				type: 'task'
			},
			{
				id: 'workstationsInspection',
				label: 'Workstations Inspection',
				dateStart: '2021-04-16',
				duration: 3,
				progress: 50,
				type: 'task'
			}
			]
		}
		]
	},
	{
		type: 'project',
		label: 'Product Release',
		synchronized: true,
		expanded: true,
		progress: 65,
		tasks: [{
			label: 'Planning',
			dateStart: '2021-04-02',
			duration: 5,
			progress: 100,
			type: 'task'
		},
		{
			label: 'Development',
			synchronized: true,
			expanded: true,
			progress: 50,
			type: 'project',
			connections: [{
				target: 'releasev1',
				type: 1
			}],
			tasks: [{
				label: 'Developing/Coding',
				dateStart: '2021-04-03',
				duration: 5,
				type: 'task',
				progress: 100,
				connections: [{
					target: 'betaRelease',
					type: 1
				}]
			},
			{
				id: 'betaRelease',
				label: 'Beta Release',
				dateStart: '2021-04-08',
				type: 'milestone',
				connections: [{
					target: 'integrateSystem',
					type: 1
				}]
			},
			{
				id: 'integrateSystem',
				label: 'Integration',
				dateStart: '2021-04-08',
				duration: 4,
				type: 'task',
				progress: 100,
				connections: [{
					target: 'test',
					type: 1
				}]
			},
			{
				id: 'test',
				label: 'Testing',
				dateStart: '2021-04-12',
				duration: 3,
				type: 'task',
				progress: 15,
				connections: [{
					target: 'marketing',
					type: 1
				}]
			},
			{
				id: 'marketing',
				label: 'Marketing and Sales',
				dateStart: '2021-04-15',
				duration: 4,
				type: 'task'
			}
			]
		},
		{
			label: 'Feedback Analysis and QA',
			dateStart: '2021-04-02',
			duration: 4,
			type: 'task',
			progress: 75,
			connections: [{
				target: 'design',
				type: 1
			}]
		},
		{
			id: 'design',
			label: 'Design',
			synchronized: true,
			expanded: true,
			progress: 25,
			type: 'project',
			tasks: [{
				label: 'Database',
				dateStart: '2021-04-06',
				duration: 4,
				progress: 50,
				type: 'task'
			},
			{
				label: 'User Interface',
				dateStart: '2021-04-08',
				duration: 4,
				progress: 10,
				type: 'task'
			}
			]
		},
		{
			label: 'Documentation',
			dateStart: '2021-04-11',
			duration: 5,
			type: 'task',
			connections: [{
				target: 'releasev1',
				type: 1
			}]
		},
		{
			id: 'releasev1',
			label: 'Release v1',
			dateStart: '2021-04-19',
			type: 'milestone'
		}
		]
	}
	];

	updateTotalDate() {
		let newDateEnd = new Date(parseInt(this.yearPicker.value), parseInt(this.monthPicker.value), parseInt(this.dayPicker.value));
		newDateEnd.setDate(newDateEnd.getDate() + parseInt(this.dayInput.current.value));

		if (isNaN(newDateEnd.getTime())) {
			this.totalDate.innerHTML = '';
			return;
		}
		this.totalDate.innerHTML = newDateEnd.toDateString();
	}

	deleteTask() {
		const gantt = this.ganttchart.current;

		gantt.removeTask(this.editedTaskIndex);
		gantt.closeWindow();
		this.editedTaskIndex = undefined;
	};

	cancelTask() {
		this.ganttchart.current.closeWindow();
	};

	saveTask() {
		const gantt = this.ganttchart.current;
		let dateStart = new Date(parseInt(this.yearPicker.value), parseInt(this.monthPicker.value), parseInt(this.dayPicker.value)),
			duration = parseInt(this.dayInput.current.value);

		gantt.updateTask(this.editedTaskIndex, {
			label: this.description.current.value,
			dateStart: dateStart,
			duration: duration
		});

		gantt.closeWindow();
		this.editedTaskIndex = undefined;
	};

	handleDayIncrementBtn() {
		const that = this;

		this.dayInput.current.value = (Math.min(31, (parseInt(this.dayInput.current.value) || 0) + 1)).toString();
		that.updateTotalDate();
	};

	handleDayDecrementBtn() {
		const that = this;

		this.dayInput.current.value = Math.max(1, (parseInt(this.dayInput.current.value) || 0) - 1).toString();
		that.updateTotalDate();
	};

	popupWindowCustomizationFunction(target, type, taskIndex) {
		const that = this,
			gantt = that.ganttchart.current;

		const targetTask = gantt.tasks[taskIndex];

		if (type === 'task' && targetTask) {
			that.editedTaskIndex = taskIndex;

			//Hide the header
			target.headerPosition = 'none';
			target.footerPosition = 'none';

			//Create the content
			if (!that.description.current) {
				target.clear();

				const template = document.getElementById('myTemplate');

				target.appendChild(template.content);

				ReactDOM.render(<MultilineTextBox ref={this.description} id="description"></MultilineTextBox>, document.getElementById('multilineTextBoxContainer'), function () {
					that.description.current.value = targetTask.label;
				});
				ReactDOM.render(<section>
					<RepeatButton id="dayDecrementBtn" onClick={this.handleDayDecrementBtn.bind(this)}><span className="glyphicon glyphicon-minus"></span>
					</RepeatButton>
					<TextBox ref={this.dayInput} id="dayInput"></TextBox>
					<RepeatButton id="dayIncrementBtn" onClick={this.handleDayIncrementBtn.bind(this)}><span className="glyphicon glyphicon-plus"></span>
					</RepeatButton>
					<label>Days</label>
				</section>, new DocumentFragment(), function () {
					that.dayInput.current.value = targetTask.duration.toString();

					while (this.children.length) {
						document.getElementById('buttonContainer').appendChild(this.firstChild);
					}
				});
				ReactDOM.render(<section>
					<Button className="error flat" ref={this.deleteBtn} id="deleteBtn" onClick={this.deleteTask.bind(this)}>Delete</Button>
					<Button className="primary flat" ref={this.cancelBtn} id="cancelBtn" onClick={this.cancelTask.bind(this)}>Cancel</Button>
					<Button className="primary" ref={this.saveBtn} id="saveBtn" onClick={this.saveTask.bind(this)}>Save</Button>
				</section>, new DocumentFragment(), function () {
					while (this.children.length) {
						document.getElementById('buttonContainer2').appendChild(this.firstChild);
					}
				});
			}

			that.taskLabel = document.getElementById('taskLabel');
			that.dayPicker = document.getElementById('dayPicker');
			that.monthPicker = document.getElementById('monthPicker');
			that.yearPicker = document.getElementById('yearPicker');
			that.dayIncrementBtn = document.getElementById('dayIncrementBtn');
			that.dayDecrementBtn = document.getElementById('dayDecrementBtn');
			that.totalDate = document.getElementById('totalDate');

			//Configure the content
			const dateStart = targetTask.dateStart,
				dateEnd = targetTask.dateEnd;

			if (!dateStart || !dateEnd) {
				that.taskLabel.innerHTML = '';
			}
			else {
				const dayFormat = ['2-digit', 'numeric'] || 'numeric';
				that.taskLabel.innerHTML = dateStart.toLocaleDateString(gantt.locale) + ' - ' +
					dateEnd.toLocaleDateString(gantt.locale);
			}

			that.dayPicker.value = dateStart.getDate().toString();
			that.monthPicker.value = dateStart.getMonth().toString();
			that.yearPicker.value = dateStart.getFullYear().toString();
			that.totalDate.innerHTML = targetTask.dateEnd.toDateString();
		}

		if (that.dayInput.current) {
			that.dayInput.current.value = targetTask.duration.toString();
		}
	}

	init() {
		const template = document.createElement('template');

		template.id = 'myTemplate';
		template.innerHTML = `
		<div className="custom-window-content">
		<div className="custom-window-content-section">
			<label id="taskLabel"></label>
		</div>
		<div className="custom-window-content-section"> <b>Description</b>
		</div>
		<div className="custom-window-content-section" id="multilineTextBoxContainer">

		</div>
		<div className="custom-window-content-section"> <b>Time Period</b>
		</div>
		<div className="custom-window-content-section date-controls">
			<div className="custom-window-content-section">
				<select id="dayPicker">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
					<option value="11">11</option>
					<option value="12">12</option>
					<option value="13">13</option>
					<option value="14">14</option>
					<option value="15">15</option>
					<option value="16">16</option>
					<option value="17">17</option>
					<option value="18">18</option>
					<option value="19">19</option>
					<option value="20">20</option>
					<option value="21">21</option>
					<option value="22">22</option>
					<option value="23">23</option>
					<option value="24">24</option>
					<option value="25">25</option>
					<option value="26">26</option>
					<option value="27">27</option>
					<option value="28">28</option>
					<option value="29">29</option>
					<option value="30">30</option>
					<option value="31">31</option>
				</select>
				<select id="monthPicker">
					<option value="0">January</option>
					<option value="1">February</option>
					<option value="2">March</option>
					<option value="3">April</option>
					<option value="4">May</option>
					<option value="5">June</option>
					<option value="6">July</option>
					<option value="7">August</option>
					<option value="8">September</option>
					<option value="9">October</option>
					<option value="10">November</option>
					<option value="11">December</option>
				</select>
				<select id="yearPicker">
					<option value="2013">2013</option>
					<option value="2014">2014</option>
					<option value="2015">2015</option>
					<option value="2016">2016</option>
					<option value="2020">2020</option>
					<option value="2021">2021</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2021">2021</option>
					<option value="2022">2022</option>
				</select>
			</div>
			<div className="custom-window-content-section" id="buttonContainer">

			</div>
			<div className="custom-window-content-section">
				<label id="totalDate"></label>
			</div>
		</div>
		<div className="custom-window-content-section buttons" id="buttonContainer2">

		</div>
	</div>`;

		document.body.appendChild(template);
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<GanttChart ref={this.ganttchart} id="gant" durationUnit={this.durationUnit} dataSource={this.dataSource}
					view={this.view} treeSize={this.treeSize} dateStart={this.dateStart}
					timelineHeaderFormatFunction={this.timelineHeaderFormatFunction.bind(this)}
					taskColumns={this.taskColumns} popupWindowCustomizationFunction={this.popupWindowCustomizationFunction.bind(this)}></GanttChart>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
