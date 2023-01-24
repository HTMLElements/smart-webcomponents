import React from "react";
import ReactDOM from "react-dom";
import { CheckBox } from 'smart-webcomponents-react/checkbox';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.ganttChart = React.createRef();
	}

	view = 'week';

	durationUnit = 'day';

	treeMin = 300;

	hideTimelineHeaderDetails = true;

	timelineHeaderFormatFunction = function (date, type, isHeaderDetailsContainer) {
		const ganttChart = document.querySelector('smart-gantt-chart');
		if (isHeaderDetailsContainer) {
			return '';
		}
		return date.toLocaleDateString(ganttChart.locale, {
			day: '2-digit',
			month: 'short'
		});
	};

	taskColumns = [{
		label: 'Tasks',
		value: 'label',
		size: '40%',
		hideResizeBar: true
	},
	{
		label: 'Start Time',
		value: 'dateStart',
		size: '30%',
		hideResizeBar: true
	},
	{
		label: 'Priority',
		value: 'value',
		hideResizeBar: true,
		customEditor: function (label, value) {
			const container = document.createDocumentFragment(),
				dropDownAppendTo = 'body',
				selectedIndexes = [value],
				dataSource = [{
					label: 'Low',
					value: 0
				},
				{
					label: 'Medium',
					value: 1
				},
				{
					label: 'High',
					value: 2
				}
				];

			React.createElement(<label>Priority</label>, container);
			React.createElement(<DropDownList dropDownAppendTo={dropDownAppendTo} selectedIndexes={selectedIndexes}
				dataSource={dataSource}></DropDownList>, container);

			return container;
		},
		getCustomEditorValue: function (editor) {
			return editor.querySelector('smart-drop-down-list').selectedIndexes[0];
		},
		formatFunction: (value) => ['Low', 'Medium', 'High'][value]
	}
	];

	dataSource = [{
		label: 'Project A',
		value: 1,
		class: 'priority-medium',
		dateStart: '2021-05-01',
		duration: 20,
		expanded: true,
		type: 'project',
		tasks: [{
			label: 'Task A',
			value: 2,
			class: 'priority-high',
			dateStart: '2021-05-03',
			duration: 5,
			connections: [{
				target: 5,
				type: 1
			}],
		},
		{
			label: 'Project A-1',
			value: 2,
			class: 'priority-high',
			dateStart: '2021-05-02',
			duration: 10,
			expanded: true,
			type: 'project',
			tasks: [{
				label: 'Task B',
				value: 1,
				class: 'priority-medium',
				dateStart: '2021-05-05',
				duration: 3,
				hidden: true
			},
			{
				label: 'Task B-1',
				value: 0,
				class: 'priority-low',
				dateStart: '2021-05-06',
				duration: 2,
				hidden: true
			},
			{
				label: 'Task B-2',
				value: 2,
				class: 'priority-high',
				dateStart: '2021-05-8',
				duration: 3
			},
			{
				label: 'Task B-3',
				value: 2,
				class: 'priority-high',
				dateStart: '2021-05-10',
				duration: 4
			},
			{
				label: 'Task B-4',
				value: 1,
				class: 'priority-medium',
				dateStart: '2021-05-10',
				duration: 4,
				hidden: true
			}
			]
		},
		{
			label: 'Project A-2',
			value: 0,
			class: 'priority-low',
			dateStart: '2021-05-05',
			duration: 8,
			expanded: true,
			hidden: true,
			type: 'project',
			tasks: [{
				label: 'Task C',
				value: 0,
				class: 'priority-low',
				dateStart: '2021-05-05',
				duration: 4,
				connections: [{
					target: 10,
					type: 1
				},
				{
					target: 11,
					type: 1
				}
				]
			},
			{
				label: 'Task C-1',
				value: 0,
				class: 'priority-low',
				dateStart: '2021-05-10',
				duration: 4
			},
			{
				label: 'Task C-2',
				value: 1,
				class: 'priority-medium',
				dateStart: '2021-05-11',
				duration: 3,
				connections: [{
					target: 12,
					type: 1
				}]
			},
			{
				label: 'Task C-3',
				value: 1,
				class: 'priority-medium',
				dateStart: '2021-05-12',
				duration: 2
			}
			]
		}
		]
	}];

	handleChange(event) {
		const target = event.target,
			ganttChart = this.ganttChart.current;

		if (target.classList.contains('priority')) {
			function getPriority(label) {
				switch (label) {
					case 'high':
						return 2;
					case 'medium':
						return 1;
					default:
						return 0;
				}
			}

			const checkBoxes = document.getElementsByClassName('priority');
			let priority = [];

			for (let i = 0; i < checkBoxes.length; i++) {
				const checkBox = checkBoxes[i];
				if (checkBox.checked) {
					priority.push(getPriority(checkBox.id));
				}
			}

			//Important Note: Begins a batch update
			ganttChart.beginUpdate();

			const tasks = ganttChart.tasks;

			for (let i = 0; i < tasks.length; i++) {
				const task = tasks[i];
				ganttChart.updateTask(task, {
					hidden: !priority.includes(task.value)
				});
			}

			//Important Note: Ends the batch update
			ganttChart.endUpdate();
		}
	}

	handleReady() {
		ReactDOM.render(<div className="priority-container">
			<CheckBox checked className="priority" id="high">High</CheckBox>
			<CheckBox className="priority" id="medium">Normal</CheckBox>
			<CheckBox className="priority" id="low">Low</CheckBox>
		</div>, document.querySelector('.task-filtering-container'))
	}

	init() {
		const that = this,
			headerTemplate = document.createElement('template');

		headerTemplate.id = 'headerTemplate';
		headerTemplate.innerHTML = `
			<div class="task-filtering-container"> 
				<b>Filter tasks by priority:</b>
			</div>`;

		document.body.appendChild(headerTemplate);

		that.ganttChart.current.headerTemplate = headerTemplate.id;
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<GanttChart ref={this.ganttChart} id="gantt"
				view={this.view}
				durationUnit={this.durationUnit}
				treeMin={this.treeMin}
				hideTimelineHeaderDetails={this.hideTimelineHeaderDetails} timelineHeaderFormatFunction={this.timelineHeaderFormatFunction}
				taskColumns={this.taskColumns} dataSource={this.dataSource} onReady={this.handleReady.bind(this)}  onChange={this.handleChange.bind(this)}></GanttChart>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
