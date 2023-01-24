import React from "react";
import ReactDOM from "react-dom";
import { GanttChart } from 'smart-webcomponents-react/ganttchart';
import { DropDownList } from 'smart-webcomponents-react/dropdownlist';

class App extends React.Component {

	treeSize = '35%';

	taskColumns = [{
		label: 'Tasks',
		value: 'label',
		size: '35%'
	},
	{
		label: 'Start Date',
		value: 'dateStart',
		size: '35%'
	},
	{
		label: 'Duration (Hours)',
		value: 'duration',
		formatFunction: (date) => parseInt(date),
		customEditor: function (label, value) {
			const fragment = document.createDocumentFragment();

			ReactDOM.render(<DropDownList dropDownAppendTo="body" dataSource={[4, 8, 12]}></DropDownList>, fragment, function () {
				const customEditorLabel = document.createElement('label');

				customEditorLabel.innerHTML = 'Duration';
				fragment.appendChild(customEditorLabel);
			});

			return fragment;
		},
		setCustomEditorValue: function (editor, label, value) {
			editor.querySelector('smart-drop-down-list').select(value.toString());
		},
		getCustomEditorValue: function (editor) {
			return editor.querySelector('smart-drop-down-list').selectedValues[0];
		}
	}
	];

	dataSource = [{
		label: 'John',
		dateStart: '2021-06-17T06:30:00',
		connections: [{
			target: 1,
			type: 1
		}],
		duration: 8,
		class: 'john',
		type: 'task'
	},
	{
		label: 'Jane',
		dateStart: '2021-06-18T09:00:00',
		connections: [{
			target: 2,
			type: 1
		}],
		duration: 8,
		class: 'jane',
		type: 'task'
	},
	{
		label: 'Peter',
		dateStart: '2021-06-19T07:30:00',
		connections: [{
			target: 3,
			type: 1
		}],
		duration: 8,
		class: 'peter',
		type: 'task'
	},
	{
		label: 'Melania',
		dateStart: '2021-06-20T10:00:00',
		connections: [{
			target: 4,
			type: 1
		}],
		duration: 8,
		class: 'melania',
		type: 'task'
	},
	{
		label: 'Donald',
		dateStart: '2021-06-21T08:30:00',
		connections: [{
			target: 5,
			type: 1
		}],
		duration: 8,
		class: 'donald',
		type: 'task'
	}
	];

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<div className="demo-description">Gantt Chart in this example represents the working hours of the employees
			        of a small company. Note that 12 PM is a non-working hour.</div>
				<GanttChart durationUnit="hour" view="day" nonworkingHours={[12]} treeSize={this.treeSize} taskColumns={this.taskColumns} dataSource={this.dataSource}></GanttChart>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
